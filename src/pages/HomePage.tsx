import Card from '../components/Card';
import { APP_NAME, DOCTOR as doctor } from '../constants/constants';

export default function HomePage () {
  return (
    <>
      <header className="shadow shadow-lg bg-lime-200 py-5">
          <h1 className='text-center text-7xl md:text-9xl font-serif pt-5'>{APP_NAME}</h1>
          <p className='text-center pt-3'>Healing Naturally, Restoring Wholeness</p>
      </header>
      <div className="container">
        <section className="text-lg p-4">
            <h2>Welcome</h2>
            <p>At {APP_NAME} clinic, we believe in the power of homeopathy to unlock the body’s innate ability to heal. Led by Dr. {doctor.firstName} {doctor.lastName} {doctor.education}, our clinic is committed to providing personalized, holistic care that addresses the root cause of illness, not just its symptoms.</p>
        </section>
        <section className="p-4 text-lg">
            <h3 className='text-lg font-semibold'>Our specialty:</h3>
            <ul className='list-disc pl-5'>
                <li>Chronic conditions (e.g., allergies, migraines, arthritis)</li>
                <li>Emotional and mental health (stress, anxiety, depression)</li>
                <li>Pediatric care and developmental support</li>
                <li>Women’s health and hormonal balance</li>
            </ul>
        </section>

        <section className="p-4">
            <h3 className='text-2xl font-semibold'>Our Philosophy</h3>
            <ul className='pl-5'>
                <li><span className='font-medium'>Treat the person, not the disease:</span> We look at physical, emotional, and lifestyle factors to create holistic solutions.</li>
                <li><span className='font-medium'>Prioritize safety:</span> Our natural remedies are gentle, non-addictive, and free from harmful side effects.</li>
                <li><span className='font-medium'>Educate and empower:</span> We equip patients with the knowledge to take charge of their well-being.</li>
            </ul>
        </section>

        <section className="py-4 pl-4">
            <h2 className='text-2xl font-semibold'>Patient Stories</h2>
            <div className=''>
            <Card 
                name='Vaibhavi Gaikwad, Baramati' 
                title='After years of battling chronic fatigue, Dr. Mahesh gave me my life back...' 
                testimony={`Before seeing him, I had consulted four or five doctors, but their treatments only provided temporary relief—my symptoms would return within weeks. Dr. Mahesh took a deeper approach, carefully investigating my condition by asking about my lifestyle and habits. This personalized attention made all the difference in my recovery. I’m incredibly grateful for his help and have already recommended him to my friends and family.
                Thank you again Dr.`}/>
              <Card 
                name='Suraj Suryavanshi'
                title='Good results within 4-5 weeks'
                testimony='Hii.. I had lots of hair problem from last 6 months.. Continuously hair fall, dandruff , itching over the scalp.. Used lots of shampoo and hair oil but it doesn`t show the result.. After I talk with Dr. Mahesh misal he  took the case  properly and started homeopathic medicine within 2 months.. I get  results in my hair growth and increase the volume of my hair.' 
              />
              <Card 
                name='Kiran Pisal, Baramati'
                testimony='I am suffered from abdominal problem was last 6 yrs and urinary problem.. I visited many hospitals and took various therapies.. but had not relief.. 
But after meet with Dr. Mahesh Misal gave me positivity, hope and cure from his consulting and treatment within 15 days.. 
 thankful to the doctor for his skillful homeopathy...'
              />
              <Card 
                name='सागर माळी'
                testimony='नमस्कार 
                  माझी मुलगी .... तीला ताप आणि अशक्तपणा गेले 8 दिवस होता काही केल्या बर वाटत नव्हत. पण आम्ही जेव्हा मिसाळ डॉक्टरांना भेटलो आणि होमिओपॅथी  औषध घेतले आणि त्यांनी तीनच डोस दिले.. त्याने तिचा ताप तर गेलाच आणि अशक्त पणाही गेला.. 
                  Thank you Doctor 🙏🏻
                  Thank you homeopathy🙏🏻'
              />
            </div>
        </section>

    </div>
        <footer className="bg-teal-500 py-5 text-center mt-5 shadow shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className=' md:order-2'>
                  <i className="fa-solid fa-mortar-pestle text-xl"></i>
                    <h2 className='font-sans text-lg pb-5'>Begin Your Healing Journey</h2>
                </div>
                <div className='py-5 md:order-1'>
                    <p><i className="fa-solid fa-phone"></i> +91 70839 77873</p>
                    <p><i className="fa-solid fa-envelope"></i> maheshmisal825@gmail.com</p>
                </div>
                <span className='pb-5 text-md md:order-3'><i className="fa-solid fa-location-dot fa-red"></i><br/> 
                Vatsalya clinic, Uktad,<br/> Guhagar road, Chiplun, Dist- Ratnagiri.
                </span>
            </div>
        </footer>
    </>
  )
}