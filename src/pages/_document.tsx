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

import Document, { NextScript, Head, Html, Main } from 'next/document';

export default class FoxDocument extends Document {
  render() {
    return <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/icon.png' />
        <link rel='icon' href='/icon.png' />
        <meta charSet='UTF-8' />
        <meta name='description' content='A furry who likes to program in Go, Java, TypeScript, JavaScript, with some Python.' />
        <meta name='theme-color' content='#1489B4' />
        <meta name='og:description' content='A furry who likes to program in Go, Java, TypeScript, JavaScript, with some Python.' />
        <meta name='og:title' content='Winter' />
        <meta name='og:image' content='https://winterfox.tech/icon.png' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content='https://winterfox.tech' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src='https://twemoji.maxcdn.com/v/latest/twemoji.min.js' crossOrigin='anonymous'></script>
      </body>
    </Html>;
  }
}
