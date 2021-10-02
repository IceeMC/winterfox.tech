/**
 * Copyright (c) 2021 August
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brands from '@fortawesome/free-brands-svg-icons';
import * as core from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';

core
  .library
  .add(
    brands.faDiscord,
    brands.faGithub,
    brands.faTelegram,
    brands.faTwitter,
    brands.faSteam,
    brands.faTwitch
  );

const socials = {
  github: {
    icon: ['fab', 'github'],
    link: 'https://github.com/IceeMC'
  },
  discord: {
    icon: ['fab', 'discord'],
    link: 'https://discord.gg/JjHGR6vhcG'
  },
  twitter: {
    icon: ['fab', 'twitter'],
    link: 'https://twitter.com/a_ice_cube'
  },
  telegram: {
    icon: ['fab', 'telegram'],
    link: 'https://t.me/WinterFoxxo'
  },
  twitch: {
    icon: ['fab', 'twitch'],
    link: 'https://twitch.tv/IceeMC'
  },
  steam: {
    icon: ['fab', 'steam'],
    link: 'https://steamcommunity.com/id/IceeMC'
  }
};

export default function Homepage() {
  const current = new Date();
  const year = current.getFullYear() === 2021 ? '2021' : `2021-${current.getFullYear()}`;

  return <>
    <div className='container'>
      <div className='container-content'>
        <div className='container-left'>
          <Image
            src='https://cdn.floofy.dev/images/Ice.png'
            className='avatar'
            alt='winter'
            width={234}
            height={234}
            draggable='false'
          />
        </div>
        <div className='container-right'>
          <h1 className='heading-1'>
            Winter
          </h1>
          <h2 className='heading-2'>
            A furry who likes to program in Go, Java, TypeScript, JavaScript, with some Python.
          </h2>

          <div className='social-row'>
            {Object.entries(socials).map(([key, social]) =>
              <a href={social.link} className={`button-${key}`} key={`social-button-${key}`} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={social.icon as any} size='2x' />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </>;
}
