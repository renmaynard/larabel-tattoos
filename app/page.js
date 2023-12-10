import Heading from './heading';
import About from './about/about';
import Contact from './contact/contact';
import TattooList from './tattoos/tattoo-list';
import ArtList from './art/art-list';

export default function Home(){
    
    return(
        <main className='bg-black'>
                <header
                className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-black"
                >
                <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
                    <Heading/>
                </div>
                </header>
                <div className=" m-auto flex items-center justify-center">
                 <About/>
                </div>
                <section
                className="container flex items-center justify-center m-auto bg-fixed bg-center bg-cover bg-black"
                >
                <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl w-32">
                    <h1 className="text-fuchsia-400">Tattoos</h1>
                </div>
                </section>
                <div className="m-auto">
                    <TattooList/>
                </div>
                <section
                className="container flex items-center justify-center m-auto bg-fixed bg-center bg-cover bg-black"
                >
                <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl w-32">
                    <h1 className="text-fuchsia-400 ml-8">Art</h1>
                </div>
                </section>
                <div className="max-w-lg m-auto flex items-center justify-center">
                    <ArtList/>
                </div>
                <section
                className="container flex items-center justify-center m-auto bg-fixed bg-center bg-cover bg-black"
                >
                <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl w-32">
                    <h1 className="text-fuchsia-400 ">Contact</h1>
                </div>
                </section>
                <div className="max-w-lg m-auto flex items-center justify-center mb-12">
                    <Contact/>
                </div>
        </main>
    )
}