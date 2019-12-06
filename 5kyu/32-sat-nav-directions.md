### Problem:
<h1 id="span-stylecolororangebackgroundspan"><span style="color:orange">Background</span></h1>
<p>It is the middle of the night.</p>
<p>You are jet-lagged from your long cartesian plane trip, and find yourself in a rental car office in an unfamiliar city.</p>
<p>You have no idea how to get to your hotel. </p>
<p>Oh, and it&apos;s raining. </p>
<p>Could you be any more miserable?</p>
<p>But the friendly rental-car dude behind the desk says not to worry! He kindly pre-programs the car <strong>Sat Nav</strong> system with your destination. He smiles and assures you that the device works OK. What excellent service! What a nice man! </p>
<p>Maybe things are not so bad after all.</p>
<p>Then he sniggers...</p>
<h1 id="span-stylecolororangecity-streetsspan"><span style="color:orange">City streets</span></h1>
<p>The city extends as far as the eye can see in all directions, and is laid out as a giant grid where all blocks are <code>1km</code> across.</p>
<p>Notice that [x,y] coordinates are described with units of <code>100m</code></p>
<img src="https://i.imgur.com/6MFbhPO.png" title="satnav city streets">


<h1 id="span-stylecolororangekata-taskspan"><span style="color:orange">Kata task</span></h1>
<p>Your starting point is <code>[0,0]</code></p>
<p>Simply follow the Sat Nav directions!</p>
<p>When you arrive at the destination return the final coordinates.</p>
<h1 id="span-stylecolororangesat-nav-directionsspan"><span style="color:orange">Sat Nav directions</span></h1>
<p>The device gives directions as text messages:</p>
<p><span style="color:red"><em>The first message</em></span></p>
<ul>
<li><code>Head &lt;NORTH,EAST,SOUTH,WEST&gt;</code></li>
</ul>
<p><span style="color:red"><em>The en-route messages</em></span></p>
<ul>
<li><code>Take the &lt;NEXT,2nd,3rd,4th,5th&gt; &lt;LEFT,RIGHT&gt;</code></li>
<li><code>Go straight on for &lt;100,200,300,...,900&gt;m</code></li>
<li><code>Go straight on for &lt;1.0,1.1,1.2,...,5.0&gt;km</code></li>
<li><code>Turn around!</code></li>
</ul>
<p><span style="color:red"><em>The last message</em></span></p>
<ul>
<li><code>You have reached your destination!</code></li>
</ul>
<p><span style="color:orange">NOTES</span></p>
<ul>
<li>First and last messages are always present</li>
<li>There may be any number of <em>en-route</em> messages</li>
<li>Messages are always formatted corrrectly</li>
<li>A <code>NEXT</code> turn message means you must to proceed to the <em>next</em> cross-street even if you are currently at an intersection</li>
<li>But <code>Turn around</code> does not need to be done at an intersection. Just do a U-turn wherever you are!</li>
</ul>
<p><br><br></p>
<p><span style="color:gray">Good Luck!<br>DM</span></p>

### Solution