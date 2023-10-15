import Image from 'next/image';
import Link from 'next/link';

// async function getPeople(): Promise<People> {
//   const res = await fetch('https://swapi.dev/api/people/');
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const peopleInfo: Promise<People> = await res.json();

//   return peopleInfo;
// }

const Page = () => (
  <section className='container'>
    <nav>
      <ul className='navbar'>
        <li>
          <Link href='/characters'>
            <Image
              alt='characters'
              className='navbar__img'
              height='175'
              src='https://starwars-visualguide.com/assets/img/categories/character.jpg'
              width='325'
            />
            <span className='navbar__description'>Characters</span>
          </Link>
        </li>
        <li>
          <Link href='/planets'>
            <Image
              alt='planets'
              className='navbar__img'
              height='175'
              src='https://starwars-visualguide.com/assets/img/categories/planets.jpg'
              width='325'
            />
            <span className='navbar__description'>Planets</span>
          </Link>
        </li>
        <li>
          <Link href='/films'>
            <Image
              alt='films'
              className='navbar__img'
              height='175'
              src='https://starwars-visualguide.com/assets/img/categories/films.jpg'
              width='325'
            />
            <span className='navbar__description'>Films</span>
          </Link>
        </li>
        <li>
          <Link href='/species'>
            <Image
              alt='species'
              className='navbar__img'
              height='175'
              src='https://starwars-visualguide.com/assets/img/categories/species.jpg'
              width='325'
            />
            <span className='navbar__description'>Species</span>
          </Link>
        </li>
        <li>
          <Link href='/vehicles'>
            <Image
              alt='vehicles'
              className='navbar__img'
              height='175'
              src='https://starwars-visualguide.com/assets/img/categories/vehicles.jpg'
              width='325'
            />
            <span className='navbar__description'>vehicles</span>
          </Link>
        </li>
        <li>
          <Link href='/starships'>
            <Image
              alt='starships'
              className='navbar__img'
              height='175'
              src='https://starwars-visualguide.com/assets/img/categories/starships.jpg'
              width='325'
            />
            <span className='navbar__description'>Starships</span>
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default Page;
