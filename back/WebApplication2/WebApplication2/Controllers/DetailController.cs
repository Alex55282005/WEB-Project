using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Data;
using WebApplication2.models;

[Route("api/[controller]")]
[ApiController]
public class DetailController : ControllerBase
{
    private readonly MyDbContext _context;

    public DetailController(MyDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Detail>>> GetDetails()
    {
        return await _context.Details.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Detail>> GetDetail(int id)
    {
        var detail = await _context.Details.FindAsync(id);
        if (detail == null)
        {
            return NotFound();
        }
        return detail;
    }
    [HttpGet("SearchByArticul/{articul}")]
    public async Task<ActionResult<IEnumerable<Detail>>> SearchByArticul(string articul)
    {
        var details = await _context.Details
                                    .Where(d => d.articul == articul)
                                    .ToListAsync();

        if (details == null || details.Count == 0)
        {
            return NotFound();
        }

        return details;
    }
    [HttpGet("subcategory/{subCategoryId}")]
    public async Task<ActionResult<IEnumerable<Detail>>> GetDetailsBySubCategoryId(int subCategoryId)
    {
        var details = await _context.Details
                                   .Where(d => d.id_sub_category == subCategoryId)
                                   .ToListAsync();
        if (details == null || !details.Any())
        {
            return NotFound();
        }
        return details;
    }

    [HttpPost]
    public async Task<ActionResult<Detail>> PostDetail(Detail detail)
    {
        _context.Details.Add(detail);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetDetail", new { id = detail.id }, detail);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutDetail(int id, Detail detail)
    {
        if (id != detail.id)
        {
            return BadRequest();
        }

        _context.Entry(detail).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!DetailExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteDetail(int id)
    {
        var detail = await _context.Details.FindAsync(id);
        if (detail == null)
        {
            return NotFound();
        }

        _context.Details.Remove(detail);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool DetailExists(int id)
    {
        return _context.Details.Any(e => e.id == id);
    }
}
