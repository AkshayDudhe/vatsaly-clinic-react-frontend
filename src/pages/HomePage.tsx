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
            <p>At {APP_NAME} clinic, we believe in the power of homeopathy to unlock the body’s innate ability to heal. Led by Dr. {doctor.firstName} {doctor.lastName} {doctor.education}, a compassionate and dedicated homeopathy practitioner with over {doctor.experience} years of experience, our clinic is committed to providing personalized, holistic care that addresses the root cause of illness, not just its symptoms.</p>
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
            <h3 className='text-lg font-semibold'>Our Philosophy</h3>
            <ul className='pl-5'>
                <li><span className='font-medium'>Treat the person, not the disease:</span> We look at physical, emotional, and lifestyle factors to create holistic solutions.</li>
                <li><span className='font-medium'>Prioritize safety:</span> Our natural remedies are gentle, non-addictive, and free from harmful side effects.</li>
                <li><span className='font-medium'>Educate and empower:</span> We equip patients with the knowledge to take charge of their well-being.</li>
            </ul>
        </section>

        <section className="p-4">
            <h2 className='text-lg font-semibold'>Patient Stories</h2>
            <Card 
                name='Vaibhavi Gaikwad, Baramati' 
                title='After years of battling chronic fatigue, Dr. Mahesh gave me my life back...' 
                testimony={`Before seeing him, I had consulted four or five doctors, but their treatments only provided temporary relief—my symptoms would return within weeks. Dr. Mahesh took a deeper approach, carefully investigating my condition by asking about my lifestyle and habits. This personalized attention made all the difference in my recovery. I’m incredibly grateful for his help and have already recommended him to my friends and family.
                Thank you again Dr.`}/>
        </section>

    </div>
        <footer className="bg-teal-500 py-5 text-center mt-5 shadow shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className=' md:order-2'>
                  <i className="fa-solid fa-mortar-pestle text-xl"></i>
                    <h2 className='font-sans text-lg pb-5'>Begin Your Healing Journey</h2>
                </div>
                <div className='py-5 md:order-1'>
                    <p>📞 91+ 70839 77873</p>
                    <p>📧 maheshmisal825@gmail.com</p>
                </div>
                <span className='py-5 text-md md:order-3'>📍
                  123 Greenleaf Avenue Suite<br/>
                    42B Springfield, <br/>
                  NY 11223 USA
                </span>
            </div>
        </footer>
    </>
  )
}