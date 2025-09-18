//import { Button } from '@/components/ui/button';
import CTA from '@/components/CTA';
import CompanionCard from '@/components/companion-card';
import CompanionsList from '@/components/companions-list';
import { recentSessions } from '../../constants';


const Page = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen py-2 px-12 mx-auto">
      <h1 className="text-2xl underline mb-4">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          subject="AI and Machine Learning"
          name="John Doe"
          topic="Technology"
          duration={30}
          color="#BDE7FF"
        />
        <CompanionCard
          id="124"
          subject="Science"
          name="Jane Smith"
          topic="Physics"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="125"
          subject="Mathematics"
          name="Alice Johnson"
          topic="Calculus"
          duration={60}
          color="#FFBDE7"
        />
      </section>

      <section className="home-section mt-8">
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full "
        />
        <CTA />
      </section>
    </div>
  )
}

export default Page;