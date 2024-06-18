using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Data;
using WebApplication2.models;

[Route("api/[controller]")]
[ApiController]
public class CartController : ControllerBase
{
    private readonly MyDbContext _context;

    public CartController(MyDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Cart>>> GetCarts()
    {
        return await _context.Carts.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Cart>> GetCart(int id)
    {
        var cart = await _context.Carts.FindAsync(id);
        if (cart == null)
        {
            return NotFound();
        }
        return cart;
    }

    [HttpGet("user/{userId}")]
    public async Task<ActionResult<IEnumerable<Cart>>> GetCartsByUserId(int userId)
    {
        var carts = await _context.Carts
                                  .Where(c => c.user_id == userId)
                                  .ToListAsync();
        if (carts == null || !carts.Any())
        {
            return NotFound();
        }
        return carts;
    }

    [HttpPost]
    public async Task<ActionResult<Cart>> PostCart(Cart cart)
    {
        _context.Carts.Add(cart);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetCart", new { id = cart.id }, cart);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutCart(int id, Cart cart)
    {
        if (id != cart.id)
        {
            return BadRequest();
        }

        _context.Entry(cart).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CartExists(id))
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
    public async Task<IActionResult> DeleteCart(int id)
    {
        var cart = await _context.Carts.FindAsync(id);
        if (cart == null)
        {
            return NotFound();
        }

        _context.Carts.Remove(cart);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool CartExists(int id)
    {
        return _context.Carts.Any(e => e.id == id);
    }
}
