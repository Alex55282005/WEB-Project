using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Data;
using WebApplication2.models;

[Route("api/[controller]")]
[ApiController]
public class UserMessagesController : ControllerBase
{
    private readonly MyDbContext _context;

    public UserMessagesController(MyDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserMessages>>> GetUserMessages()
    {
        return await _context.UserMessages.ToListAsync();
    }
    [HttpGet("user/{user_id}")]
    public async Task<ActionResult<IEnumerable<UserMessages>>> GetUserMessagesByIDUser(int user_id)
    {
        var userMessage = await _context.UserMessages
                                   .Where(d => d.user_id == user_id)
                                   .ToListAsync();
        if (userMessage == null || !userMessage.Any())
        {
            return NotFound();
        }
        return userMessage;
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<UserMessages>> GetUserMessages(int id)
    {
        var userMessages = await _context.UserMessages.FindAsync(id);
        if (userMessages == null)
        {
            return NotFound();
        }
        return userMessages;
    }

    [HttpPost]
    public async Task<ActionResult<UserMessages>> PostUserMessages(UserMessages userMessages)
    {
        _context.UserMessages.Add(userMessages);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetUserMessages", new { id = userMessages.id }, userMessages);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUserMessages(int id, UserMessages userMessages)
    {
        if (id != userMessages.id)
        {
            return BadRequest();
        }
        _context.Entry(userMessages).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!UserMessagesExists(id))
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
    public async Task<IActionResult> DeleteUserMessages(int id)
    {
        var userMessages = await _context.UserMessages.FindAsync(id);
        if (userMessages == null)
        {
            return NotFound();
        }
        _context.UserMessages.Remove(userMessages);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    private bool UserMessagesExists(int id)
    {
        return _context.UserMessages.Any(e => e.id == id);
    }
}
