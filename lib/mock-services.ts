import type { Service } from '@/components/service-card'

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'سباكة منزلية احترافية',
    workerName: 'أحمد بنعلي',
    city: 'الدار البيضاء',
    cityKey: 'casablanca',
    phone: '0661234567',
    description: 'خبرة أكثر من 15 سنة في مجال السباكة. إصلاح جميع أنواع التسربات، تركيب الحنفيات والمراحيض، صيانة سخانات المياه. خدمة سريعة ومضمونة.',
    category: 'plumber'
  },
  {
    id: '2',
    name: 'كهربائي معتمد',
    workerName: 'محمد العلوي',
    city: 'الرباط',
    cityKey: 'rabat',
    phone: '0667891234',
    description: 'فني كهربائي معتمد. تمديدات كهربائية، إصلاح الأعطال، تركيب الإنارة والمفاتيح. نتنقل لجميع أحياء الرباط وسلا.',
    category: 'electrician'
  },
  {
    id: '3',
    name: 'نجارة وتركيب أثاث',
    workerName: 'يوسف الإدريسي',
    city: 'مراكش',
    cityKey: 'marrakech',
    phone: '0654321098',
    description: 'نجار متخصص في صناعة وتركيب الأثاث المنزلي والمكتبي. أعمال خشبية متقنة بأسعار مناسبة.',
    category: 'carpenter'
  },
  {
    id: '4',
    name: 'دهان وتزيين المنازل',
    workerName: 'عبد الله الفاسي',
    city: 'فاس',
    cityKey: 'fes',
    phone: '0672345678',
    description: 'دهان محترف متخصص في الدهانات الحديثة والتقليدية. تزيين الجدران بأحدث الألوان والتقنيات.',
    category: 'painter'
  },
  {
    id: '5',
    name: 'خدمات تنظيف شاملة',
    workerName: 'فاطمة الزهراء',
    city: 'طنجة',
    cityKey: 'tangier',
    phone: '0689012345',
    description: 'فريق متخصص في تنظيف المنازل والمكاتب. تنظيف عميق للسجاد والأثاث. خدمة يومية أو أسبوعية.',
    category: 'cleaner'
  },
  {
    id: '6',
    name: 'طباخة أطباق مغربية',
    workerName: 'خديجة بنموسى',
    city: 'أكادير',
    cityKey: 'agadir',
    phone: '0698765432',
    description: 'طباخة متخصصة في الأطباق المغربية التقليدية. تحضير الولائم والمناسبات. كسكس، طاجين، بسطيلة وغيرها.',
    category: 'cook'
  },
  {
    id: '7',
    name: 'سائق خاص وتوصيل',
    workerName: 'حسن المرابط',
    city: 'مكناس',
    cityKey: 'meknes',
    phone: '0612345678',
    description: 'سائق خاص ذو خبرة طويلة. خدمات التوصيل والرحلات داخل وخارج المدينة. سيارة مريحة ونظيفة.',
    category: 'driver'
  },
  {
    id: '8',
    name: 'ميكانيكي سيارات متنقل',
    workerName: 'رشيد بوزيان',
    city: 'وجدة',
    cityKey: 'oujda',
    phone: '0678901234',
    description: 'ميكانيكي متنقل لإصلاح السيارات في المنزل. تغيير الزيت، إصلاح الفرامل، تشخيص الأعطال.',
    category: 'mechanic'
  },
]

export function searchServices(query: string, city: string, category: string): Service[] {
  return mockServices.filter(service => {
    const matchesQuery = !query || 
      service.name.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase()) ||
      service.workerName.toLowerCase().includes(query.toLowerCase())
    
    const matchesCity = !city || service.cityKey === city
    const matchesCategory = !category || service.category === category
    
    return matchesQuery && matchesCity && matchesCategory
  })
}

export function getServiceById(id: string): Service | undefined {
  return mockServices.find(service => service.id === id)
}
