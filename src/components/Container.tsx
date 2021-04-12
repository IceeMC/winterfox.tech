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

export default function Container({ children, image }: {
  children: React.ReactNode;
  image: 'huh' | 'sit';
}) {
  // credit for container: https://github.com/dondish/personal-site/blob/master/src/components/MainHero.vue
  return <div className='flex flex-col relative lg:p-16 z-50 justify-center fixed-height'>
    <div className='lg:text-center lg:container lg:grid lg:grid-cols-4 lg:rounded lg:pt-8 lg:h-auto lg:mx-auto text-center w-full block pt-12 p-8 gap-3'>
      <div className='flex justify-center mx-auto mb-5'>
        <Image
          src={`/${image}.png`}
          alt={image === 'huh' ? 'Winter Huh?' : 'Winter Sit!'}
          width={image === 'sit' ? 'auto' : 350}
          height={image === 'sit' ? 'auto' : 350}
          draggable='false'
        />
      </div>

      <div className='lg:justify-none lg:col-span-3 justify-center'>
        {children}
      </div>
    </div>
  </div>;
}
