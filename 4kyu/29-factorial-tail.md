### Problem:
<h3 id="the-problem">The problem</h3>
<p>How many zeroes are at the <strong>end</strong> of the <a href="https://en.wikipedia.org/wiki/Factorial" target="_blank">factorial</a> of <code>10</code>? 10! = 36288<u>00</u>, i.e. there are <code>2</code> zeroes.
16! (or 0x10!) in <a href="https://en.wikipedia.org/wiki/Hexadecimal" target="_blank">hexadecimal</a> would be 0x130777758<u>000</u>, which has <code>3</code> zeroes.</p>
<h3 id="scalability">Scalability</h3>
<p>Unfortunately, machine integer numbers has not enough precision for larger values. Floating point numbers drop the tail we need. We can fall back to arbitrary-precision ones - built-ins or from a library, but calculating the full product isn&apos;t an efficient way to find just the <em>tail</em> of a factorial. Calculating <code>100&apos;000!</code> in compiled language takes around 10 seconds. <code>1&apos;000&apos;000!</code> would be around 10 minutes, even using efficient <a href="https://en.wikipedia.org/wiki/Karatsuba_algorithm" target="_blank">Karatsuba algorithm</a></p>
<h3 id="your-task">Your task</h3>
<p>is to write a function, which will find the number of zeroes at the end of <code>(number)</code> factorial in arbitrary <a href="https://en.wikipedia.org/wiki/Radix" target="_blank">radix</a> = <code>base</code> for larger numbers.</p>
<ul>
<li><code>base</code> is an integer from 2 to 256</li>
<li><code>number</code> is an integer from 1 to 1&apos;000&apos;000</li>
</ul>
<p><u><strong>Note</strong></u> Second argument: number is always declared, passed and displayed as a regular <em>decimal</em> number. If you see a test described as <code>42! in base 20</code> it&apos;s 42<sub>10</sub> <strong>not</strong> 42<sub>20</sub> = 82<sub>10</sub>.</p>

### Solution