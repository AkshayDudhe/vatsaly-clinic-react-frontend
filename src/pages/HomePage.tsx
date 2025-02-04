import { APP_NAME, DOCTOR as doctor } from '../constants/constants';

export default function HomePage () {
  return (
    <>
      <header className="shadow shadow-lg bg-lime-200 h-60">
          <h1 className='text-center text-9xl font-serif'>{APP_NAME}</h1>
          <p className='text-center pt-3'>Healing Naturally, Restoring Wholeness</p>
      </header>
      <div className="container">
        <section className="text-lg p-4">
            <h2>Welcome</h2>
            <p>At {APP_NAME} clinic, we believe in the power of homeopathy to unlock the body’s innate ability to heal. Led by Dr. {doctor.firstName} {doctor.lastName} {doctor.education}, a compassionate and dedicated homeopathy practitioner with over {doctor.experience} years of experience, our clinic is committed to providing personalized, holistic care that addresses the root cause of illness, not just its symptoms.</p>
        </section>
        <section className="p-4 text-lg">
            <h3>Our specialty:</h3>
            <ul className='list-disc pl-5'>
                <li>Chronic conditions (e.g., allergies, migraines, arthritis)</li>
                <li>Emotional and mental health (stress, anxiety, depression)</li>
                <li>Pediatric care and developmental support</li>
                <li>Women’s health and hormonal balance</li>
            </ul>
        </section>

        <section className="p-4 text-lg">
            <h2>Our Philosophy</h2>
            <ul>
                <li><strong>Treat the person, not the disease:</strong> We look at physical, emotional, and lifestyle factors to create holistic solutions.</li>
                <li><strong>Prioritize safety:</strong> Our natural remedies are gentle, non-addictive, and free from harmful side effects.</li>
                <li><strong>Educate and empower:</strong> We equip patients with the knowledge to take charge of their well-being.</li>
            </ul>
        </section>

        <section className="section">
            <h2>Patient Stories</h2>
            <div className="testimonial-grid">
                <div className="testimonial-card">
                    <p className="quote">"After years of battling chronic fatigue, Dr. [Last Name] gave me my life back..."</p>
                    <p className="author">Sarah T., [City]</p>
                </div>
            </div>
        </section>

    </div>
        <footer className="bg-teal-500 py-5 text-center mt-5 shadow shadow-lg">
            <div className="grid grid-cols-3">
                <div>
                    <p>📞 1234567890</p>
                    <p>📧 mahesh.misal@gmail.com</p>
                </div>
                <div className=''>
                    <h2 className='font-sans text-lg p-2'>Begin Your Healing Journey</h2>
                  <i className="fa-solid fa-mortar-pestle text-xl"></i>
                </div>
                <span className='text-md'>📍
                  123 Greenleaf Avenue Suite<br/>
                    42B Springfield, <br/>
                  NY 11223 USA
                </span>
            </div>
        </footer>
    </>
  )
}