import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'Matha Nursing College | Job Oriented Paramedical Courses for 10th & 12th Passed Students | Enroll Now',
  description: 'Unlock a Bright Future with Our 100% Job Oriented Paramedical Courses for 10th & 12th Passed Students! Choose from a Variety of In-Demand Diplomas: Nursing, Medical Laboratory Technology, Operation Theatre Technology, X-Ray Technology, Pharmacy Assistance, CT Scan Technology, and ECG Technician. Our 2-year and 1-year programs are designed to equip you with the skills needed for success. Benefit from Expert Guidance by Experienced Teachers and Real-World Training at Premier Multi-Specialty Hospitals. Take the Next Step Towards a Rewarding Healthcare Career Today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
