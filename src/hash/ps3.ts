//https://www.techpowerup.com/gpu-specs/playstation-3-gpu-65nm.c1682
const cpu_amount = 2000
type KB = number
type MB = number
type GB = number
type f_glopes = number
type s_glopes = number
type cpu_clockspeed = number
type gpu_clockspeed = number
type l1_chache = number
type l2_chache = number
type GPixels = number
type GTixels = number
type GVirteces = number
type wats = number
const cpu_spec: {
    clockspeed: cpu_clockspeed;
    l1_chache: l1_chache;
    l2_chche: l2_chache;
    spe_amount: number;
    spe_memory: MB;
    spe_max_mem_per: KB;
    s_glopes: s_glopes;
    f_glopes: f_glopes;
} = {
    clockspeed: 3.2,
    l1_chache: 64,
    l2_chche: 512,//
    spe_amount: 8,
    spe_memory: 2000,
    spe_max_mem_per: 256,
    s_glopes:179.2,
    f_glopes: 179.2  
}
const gpu: {
    clock_speed: number;
    memory: MB;
    memory_speed: number;
    memory_type: string;
    f_glopes: number;
    pixel_shaders: number;
    vertex_shaders: number;
    TMUs: number;
    ROPs: number;
    pixel_rate: GPixels;
    vertex_rate: GVirteces;
    texel_rate: GTixels;
} = {
    clock_speed: 500,
    memory: 256,
    memory_speed: 650,
    memory_type: 'GDDR3',
    f_glopes: 192,
    pixel_shaders: 24,
    vertex_shaders: 8,
    TMUs: 24,
    ROPs: 8,
    pixel_rate: 4.400,
    vertex_rate: 1.100,
    texel_rate: 13.20,
}
const rev = {
    lanch:200,//wats,
    lanch_1:140,//wats,
    lanch_2:84//wats
}
const bd_readspead = 72
const dvd_readspead = 86
const cd_readspead = 30
const DATA = [
    {   
        name:'PS3 fat',
        power:rev.lanch*cpu_amount,
        gpu:{
            clock_speed: gpu.clock_speed * 2000,
            memory: gpu.memory * 2000,
            memory_speed: gpu.memory_speed * 2000,
            memory_type: gpu.memory_type,
            f_glopes: gpu.f_glopes * 2000,
            pixel_shaders: gpu.pixel_shaders * 2000,
            vertex_shaders: gpu.vertex_shaders * 2000,
            TMUs: gpu.TMUs * 2000,
            ROPs: gpu.ROPs * 2000,
            pixel_rate: gpu.pixel_rate * 2000,
            vertex_rate: gpu.vertex_rate * 2000,
            texel_rate: gpu.texel_rate * 2000
        },
        cpu:{
            clockspeed: cpu_spec.clockspeed * 2000,
            l1_chache: cpu_spec.l1_chache * 2000,
            l2_chche: cpu_spec.l2_chche * 2000,
            spe_amount: cpu_spec.spe_amount * 2000,
            spe_memory: cpu_spec.spe_memory * 2000,
            spe_max_mem_per: cpu_spec.spe_max_mem_per * 2000,
            s_glopes: cpu_spec.s_glopes * 2000,
            f_glopes: cpu_spec.f_glopes * 2000
        },
        bd_readspead: bd_readspead * 2000,
        dvd_readspead: dvd_readspead * 2000,
        cd_readspead: cd_readspead * 2000
    },
    {   
        name:'PS3 Slim 1',
        power:rev.lanch_1*cpu_amount,
        gpu:{
            clock_speed: gpu.clock_speed * 2000,
            memory: gpu.memory * 2000,
            memory_speed: gpu.memory_speed * 2000,
            memory_type: gpu.memory_type,
            f_glopes: gpu.f_glopes * 2000,
            pixel_shaders: gpu.pixel_shaders * 2000,
            vertex_shaders: gpu.vertex_shaders * 2000,
            TMUs: gpu.TMUs * 2000,
            ROPs: gpu.ROPs * 2000,
            pixel_rate: gpu.pixel_rate * 2000,
            vertex_rate: gpu.vertex_rate * 2000,
            texel_rate: gpu.texel_rate * 2000
        },
        cpu:{
            clockspeed: cpu_spec.clockspeed * 2000,
            l1_chache: cpu_spec.l1_chache * 2000,
            l2_chche: cpu_spec.l2_chche * 2000,
            spe_amount: cpu_spec.spe_amount * 2000,
            spe_memory: cpu_spec.spe_memory * 2000,
            spe_max_mem_per: cpu_spec.spe_max_mem_per * 2000,
            s_glopes: cpu_spec.s_glopes * 2000,
            f_glopes: cpu_spec.f_glopes * 2000
        },
        bd_readspead: bd_readspead * 2000,
        dvd_readspead: dvd_readspead * 2000,
        cd_readspead: cd_readspead * 2000
    },
    {   
        name:'PS3 Slim ',
        power:rev.lanch_2*cpu_amount,
        gpu:{
            clock_speed: gpu.clock_speed * 2000,
            memory: gpu.memory * 2000,
            memory_speed: gpu.memory_speed * 2000,
            memory_type: gpu.memory_type,
            f_glopes: gpu.f_glopes * 2000,
            pixel_shaders: gpu.pixel_shaders * 2000,
            vertex_shaders: gpu.vertex_shaders * 2000,
            TMUs: gpu.TMUs * 2000,
            ROPs: gpu.ROPs * 2000,
            pixel_rate: gpu.pixel_rate * 2000,
            vertex_rate: gpu.vertex_rate * 2000,
            texel_rate: gpu.texel_rate * 2000
        },
        cpu:{
            clockspeed: cpu_spec.clockspeed * 2000,
            l1_chache: cpu_spec.l1_chache * 2000,
            l2_chche: cpu_spec.l2_chche * 2000,
            spe_amount: cpu_spec.spe_amount * 2000,
            spe_memory: cpu_spec.spe_memory * 2000,
            spe_max_mem_per: cpu_spec.spe_max_mem_per * 2000,
            s_glopes: cpu_spec.s_glopes * 2000,
            f_glopes: cpu_spec.f_glopes * 2000
        },
        bd_readspead: bd_readspead * 2000,
        dvd_readspead: dvd_readspead * 2000,
        cd_readspead: cd_readspead * 2000
    },
]
console.log(DATA)