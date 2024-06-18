using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Data;
using WebApplication2.models;

[Route("api/[controller]")]
[ApiController]
public class HelpMessagesController : ControllerBase
{
    private readonly MyDbContext _context;

    public HelpMessagesController(MyDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<HelpMessages>>> GetHelpMessages()
    {
        return await _context.HelpMessages.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<HelpMessages>> GetHelpMessages(int id)
    {
        var helpMessages = await _context.HelpMessages.FindAsync(id);
        if (helpMessages == null)
        {
            return NotFound();
        }
        return helpMessages;
    }
    [HttpGet("users/{user_id}")]
    public async Task<ActionResult<IEnumerable<HelpMessages>>> GetHelpMessagesByIDUser(int user_id)
    {
        var helpMessage = await _context.HelpMessages
                                   .Where(d => d.user_id == user_id)
                                   .ToListAsync();
        if (helpMessage == null || !helpMessage.Any())
        {
            return NotFound();
        }
        return helpMessage;
    }

    [HttpPost]
    public async Task<ActionResult<HelpMessages>> PostHelpMessages(HelpMessages helpMessages)
    {
        _context.HelpMessages.Add(helpMessages);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetHelpMessages", new { id = helpMessages.id }, helpMessages);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutHelpMessages(int id, HelpMessages helpMessages)
    {
        if (id != helpMessages.id)
        {
            return BadRequest();
        }
        _context.Entry(helpMessages).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!HelpMessagesExists(id))
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
    public async Task<IActionResult> DeleteHelpMessages(int id)
    {
        var helpMessages = await _context.HelpMessages.FindAsync(id);
        if (helpMessages == null)
        {
            return NotFound();
        }
        _context.HelpMessages.Remove(helpMessages);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    private bool HelpMessagesExists(int id)
    {
        return _context.HelpMessages.Any(e => e.id == id);
    }
}
