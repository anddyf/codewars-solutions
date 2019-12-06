### Problem:
<p>The mean and standard deviation of a sample of data can be thrown off if the sample contains one or many outlier(s) :</p>
<p><img src="http://www.ukoln.ac.uk/web-focus/webwatch/reports/hei-lib-may1998/fig11.gif" href="http://www.ukoln.ac.uk/web-focus/webwatch/reports/hei-lib-may1998/report.html"></p><div></div>
(<a href="http://www.ukoln.ac.uk/web-focus/webwatch/reports/hei-lib-may1998/report.html" target="_blank">image source</a>)<p></p>
<p>For this reason, it is usually a good idea to check for and remove outliers before computing the mean or the standard deviation of a sample. To this aim, your function will receive a list of numbers representing a <code>sample</code> of data. Your function must remove any outliers and return the mean of the <code>sample</code>, <strong>rounded</strong> to <strong>two</strong> decimal places (round only at the end).</p>
<p>Since there is no objective definition of &quot;outlier&quot; in statistics, your function will also receive a <code>cutoff</code>, in standard deviation units. So for example if the cutoff is 3, then any value that is <strong>more</strong> than 3 standard deviations above or below the mean must be removed. <em>Notice that, once outlying values are removed in a first &quot;sweep&quot;, other less extreme values may then &quot;become&quot; outliers, that you&apos;ll have to remove as well!</em></p>
<p><strong>Example :</strong></p>
<pre><code class="language-python">sample = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>]
cutoff = <span class="hljs-number">3</span>
clean_mean(sample, cutoff) &#x2192; <span class="hljs-number">5.5</span></code></pre>
<pre style="display: none;"><code class="language-r"><span class="hljs-comment"># R uses sam instead of sample to avoid conflicts with the</span>
<span class="hljs-comment"># base function sample()</span>
sam &lt;- c(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">100</span>)
cutoff &lt;- <span class="hljs-number">3</span>
clean_mean(sam, cutoff)
[<span class="hljs-number">1</span>] <span class="hljs-number">5.5</span></code></pre>
<p><strong>Formula for the <a href="https://en.wikipedia.org/wiki/Mean" target="_blank">mean</a> :</strong></p>
<p><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/bd2f5fb530fc192e4db7a315777f5bbb5d462c90" style="background-color:lightgray"></p><div></div>
(where n is the sample size)<p></p>
<p><strong>Formula for the <a href="https://en.wikipedia.org/wiki/Standard_deviation#Estimation" target="_blank">standard deviation</a> :</strong></p>
<p><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/9a937016f00f1978197aa562c5f2d58619f90806" style="background-color:lightgray"></p><div></div>
(where N is the sample size, x<sub>i</sub> is observation i and x&#x304; is the sample mean)<p></p>
<p><em>Note : since we are not computing the sample standard deviation for inferential purposes, the denominator is n, not n - 1.</em></p>

### Solution