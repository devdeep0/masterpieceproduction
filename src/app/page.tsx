import Image from "next/image"
import { Calendar, MapPin, Trophy, Users, Star, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#10192b] z-10" />
        </div>
        <div className="absolute inset-0 z-0 px-4 mx-auto w-full left-56">
          <Image
          src="/logo/main.jpeg"
          alt=""
          width={300}
          height={300}
          />
          </div>
        <div className="container mx-auto px-4 z-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">Masterpiece Production</h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-300">Empowering Entrepreneurs, Elevating Dreams</p>
            <button className="inline-flex items-center bg-[#df740f] hover:bg-orange-600 text-black px-8 py-6 text-lg rounded-full transition-colors">
              Apply Now
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2">10K+</h3>
              <p className="text-gray-400">Applications</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2">100+</h3>
              <p className="text-gray-400">Awards</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2">20+</h3>
              <p className="text-gray-400">Speakers</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2">50+</h3>
              <p className="text-gray-400">Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-300">
                Our mission is to create a bridge between creativity and commerce by empowering entrepreneurs and
                inspiring the next generation of business leaders. Through our unique platform, we not only celebrate
                success but also foster opportunities for meaningful collaborations and partnerships that fuel further
                growth.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-300">
                To be the leading production company that champions innovation and entrepreneurship, amplifying the
                voices of emerging businesses and helping them make a lasting impact on their industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Dharam</h3>
              <p className="text-gray-300">
                With over six years of sales and marketing expertise, Dharam has worked with globally renowned brands
                like L'Oréal, Morphose, and Wella. His deep knowledge of team management, strategic planning, and
                business development makes him an invaluable force in driving our company's vision forward.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">Ruby Kapoor</h3>
              <p className="text-gray-300">
                As the co-owner of the successful Curly Palace Salon, Ruby brings more than 15 years of business
                experience to the table. Her keen understanding of the entrepreneurial landscape, combined with her
                passion for nurturing new ideas, positions her as a mentor and guide for aspiring business owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Benefits of the Award</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <Trophy className="w-12 h-12 text-[#df740f] mb-4" />
              <h3 className="text-xl font-bold mb-2">Enhanced Visibility</h3>
              <p className="text-gray-300">
                Winners receive unparalleled exposure through media coverage and social media buzz.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <Users className="w-12 h-12 text-[#df740f] mb-4" />
              <h3 className="text-xl font-bold mb-2">Strategic Partnerships</h3>
              <p className="text-gray-300">
                Awardees are invited to collaborate with Masterpiece Production to amplify their business impact.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <Star className="w-12 h-12 text-[#df740f] mb-4" />
              <h3 className="text-xl font-bold mb-2">Social Media Boost</h3>
              <p className="text-gray-300">
                By promoting their recognition on social media, winners can attract new audiences, investors, and
                collaborators.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <Users className="w-12 h-12 text-[#df740f] mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-gray-300">
                Becoming part of an exclusive network of like-minded entrepreneurs and visionaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Our Journey</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a celebrity launching a new business, an entrepreneur with a dream, or a partner looking to
            collaborate, Masterpiece Production is here to help you shine.
          </p>
          <button className="inline-flex items-center bg-[#df740f] hover:bg-orange-600 text-black px-8 py-6 text-lg rounded-full transition-colors">
            Apply Now
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Masterpiece Production. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

