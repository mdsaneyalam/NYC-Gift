using AutoMapper;
using NYCGift.Controllers.Resources;
using NYCGift.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NYCGift.Mapping
{
    public class MappingProfile:Profile
    {

        public MappingProfile()
        {
            CreateMap<Store, StoreResource>();
        }
    }
}
