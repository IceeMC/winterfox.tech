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

import Image from 'next/image';
import Twemoji from '../components/Twemoji';

export default function Homepage() {
  const current = new Date();
  const year = current.getFullYear() === 2021 ? '2021' : `2021-${current.getFullYear()}`;

  return <>
    <div className='container'>
      <div className='container-content'>
        <div className='container-left'>
          <Image
            src='/icon.png'
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
        </div>
      </div>
    </div>

    <footer className='footer'>
      <p>
        bork bork! | &copy; {year} <a href='https://floofy.dev' rel='noopener' style={{ color: 'white' }}>Noel</a> <Twemoji emoji='🥀' /> (art is not owned by me.)
      </p>
    </footer>
  </>;
}
