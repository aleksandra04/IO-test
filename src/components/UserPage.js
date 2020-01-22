import React from 'react';
import '../styles/UserPage.scss';
import { Link } from 'react-router-dom';


const projects = [
  'Flirchi',
  'io',
  'company name',
  'facenews.com',
  'package',
  'something else',
  'random',
  'comunity',
  'work'
]

const UserPage = () => {

  return (
    <section className='projects-container'>
      <h1 className='projects-container__header'>
        Hi,
        <span className='projects-container__header--name'>
          Nikita !
        </span>
      </h1>
      <p className='projects-container__text'>
        Please choose your project
      </p>
        <ul className='projects-list'>
          {projects.map(project => (
            <li className='projects-list__item'>
              <Link
                to='someProject'
                className='projects-list__item__link'
              >
                {project}
              </Link>
            </li>
          ))}
        </ul>
    </section>
  )
}

export default UserPage