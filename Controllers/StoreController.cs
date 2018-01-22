using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NYCGift.Controllers.Resources;
using NYCGift.Models;
using NYCGift.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NYCGift.Controllers
{
    public class StoreController
    {
        private readonly NycGiftDbContext context;
        private readonly IMapper mapper;

        public StoreController(NycGiftDbContext _context, IMapper _mapper)
        {
            this.context = _context;
            mapper = _mapper;
        }

        public IMapper _Mapper { get; }

        [HttpGet("/api/stores")]
        public async Task<IEnumerable<StoreResource>> GetStore() {
            var stores= await context.Stores.ToListAsync();

            return mapper.Map<List<Store>, List<StoreResource>>(stores);
        }
    }
}
