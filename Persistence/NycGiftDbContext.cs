using Microsoft.EntityFrameworkCore;
using NYCGift.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NYCGift.Persistence
{
    public class NycGiftDbContext: DbContext
    {
        public NycGiftDbContext(DbContextOptions<NycGiftDbContext> options)
            :base(options)
        {

        }

        public DbSet<Store> Stores { get; set; }
    }
}
