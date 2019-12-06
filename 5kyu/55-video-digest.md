### Problem:
<p>Whereas users may use a secure connection (https) for browsing and selecting the videos they want to watch, the videos themselves are often downloaded from a content delivery network (CDN), which is not secure. There is therefore a risk that the videos have been tampered with.</p>
<p>To remedy for this potential threat, a hash of the video is provided on the secure site, which is downloaded and used by the video protocol to verify the authenticity of the video. This is done automatically without the user&apos;s involvement. However, rather than being the hash of the entire video, this hash is used to verify only a first block of the video stream, the last few bytes of which contain the hash used to verify the next block. The next block contains the hash used to verify the following block, and so forth, until the penultimate block, which contains the hash used to verify the last block. The last block contains no hash. </p>
<p>This allows the user to start watching the video before the entire video has been downloaded. Since statistics show that many users stop watching a video after a few seconds only, it also prevents unnecessary traffic on the CDN.</p>
<p>For the purposes of this kata, the <em>source</em> video is the original video without the hash codes embedded, and <em>target</em> video is the video with the hash codes embedded. The source and target videos are each represented by a string of lower case hex characters, the source video block size is 8 bytes (16 hex characters) and the hash size is 2 bytes (4 hex characters). The target block sizes are therefore 10 bytes (20 hex characters) long, i.e., the 8 bytes of the source block followed by the two-byte hash of the next target video block. The last block of the source video and the last block of the target video are identical and are up to 8 bytes long. These sizes would obviously not provide sufficient security in a real deployment, yet they serve their purpose here. </p>
<p>To make this kata a little more precise, here is example code (in Python) to retrieve the source video given the hash of the first block and the target video. (I&apos;ve tried to avoid anything other than basic language constructs to make it readable to those who are not proficient in Python.)</p>
<pre><code class="language-Python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">video_decode</span><span class="hljs-params">(hash, target)</span>:</span>
    source = <span class="hljs-string">&quot;&quot;</span>
    block_start = <span class="hljs-number">0</span>
    <span class="hljs-keyword">while</span> block_start &lt; len(target):
        <span class="hljs-keyword">if</span> block_start + <span class="hljs-number">20</span> &lt; len(target): <span class="hljs-comment"># not last block</span>
            block = target[block_start:block_start + <span class="hljs-number">20</span>]
        <span class="hljs-keyword">else</span>: <span class="hljs-comment"># last block</span>
            block = target[block_start:len(target)]
        <span class="hljs-keyword">if</span> digest(block) != hash:
            <span class="hljs-keyword">return</span> <span class="hljs-literal">None</span>
        <span class="hljs-keyword">if</span> len(block) == <span class="hljs-number">20</span>: <span class="hljs-comment"># not last block</span>
            hash = block[<span class="hljs-number">16</span>:<span class="hljs-number">20</span>]
            source += block[<span class="hljs-number">0</span>:<span class="hljs-number">16</span>]
        <span class="hljs-keyword">else</span>: <span class="hljs-comment"># last block</span>
            <span class="hljs-keyword">assert</span> len(block) &lt;= <span class="hljs-number">16</span>
            source += block
        block_start += <span class="hljs-number">20</span>
    <span class="hljs-keyword">return</span> source</code></pre>
<p>Your job is to invert this function and produce the hash of the first block and target video given the source video. </p>
<p>Good luck!</p>

### Solution