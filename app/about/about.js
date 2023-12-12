import Image from "next/image";

const About = () =>{
return(
    <div className="mb-12 max-w-3xl flex items-center justify-center grid grid-cols-2">
        <div>
            <Image src="images/artist.png" width={300} height={500}/>
        </div>
        <div>
            <p className="text-fuchsia-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Cursus sit amet dictum sit amet justo donec enim 
                diam. Interdum posuere lorem ipsum dolor sit. Dolor sed 
                viverra ipsum nunc aliquet bibendum enim. Vel quam elementum
                pulvinar etiam non. Ac feugiat sed lectus vestibulum mattis 
                ullamcorper velit sed ullamcorper. Nec nam aliquam sem et 
                tortor. Gravida arcu ac tortor dignissim convallis aenean et. 
                Dignissim diam quis enim lobortis scelerisque. Ultricies integer 
                quis auctor elit sed vulputate mi sit. Ornare arcu dui vivamus 
                arcu felis bibendum ut tristique.Enim blandit volutpat maecenas
                volutpat blandit aliquam. Sem nulla pharetra diam sit amet .
            </p>
        </div>
    </div>
)
}

export default About;
