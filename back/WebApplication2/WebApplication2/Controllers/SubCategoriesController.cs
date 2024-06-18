using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Data;
using WebApplication2.models;

[Route("api/[controller]")]
[ApiController]
public class SubCategoriesController : ControllerBase
{
    private readonly MyDbContext _context;

    public SubCategoriesController(MyDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<SubCategories>>> GetSubCategories()
    {
        return await _context.SubCategories.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<SubCategories>> GetSubCategory(int id)
    {
        var subCategory = await _context.SubCategories.FindAsync(id);
        if (subCategory == null)
        {
            return NotFound();
        }
        return subCategory;
    }

    [HttpPost]
    public async Task<ActionResult<SubCategories>> PostSubCategory(SubCategories subCategory)
    {
        _context.SubCategories.Add(subCategory);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetSubCategory", new { id = subCategory.id }, subCategory);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutSubCategory(int id, SubCategories subCategory)
    {
        if (id != subCategory.id)
        {
            return BadRequest();
        }
        _context.Entry(subCategory).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!SubCategoryExists(id))
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
    public async Task<IActionResult> DeleteSubCategory(int id)
    {
        var subCategory = await _context.SubCategories.FindAsync(id);
        if (subCategory == null)
        {
            return NotFound();
        }
        _context.SubCategories.Remove(subCategory);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    private bool SubCategoryExists(int id)
    {
        return _context.SubCategories.Any(e => e.id == id);
    }
}
