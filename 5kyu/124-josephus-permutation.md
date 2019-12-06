### Problem:
<p>This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.</p>
<p>Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: <strong>they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act)</strong>.</p>
<p>Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn&apos;t exactly follow through the original idea.</p>
<p>You are now to create a function that returns a Josephus permutation, taking as parameters the initial <em>array/list of items</em> to be permuted as if they were in a circle and counted out every <em>k</em> places until none remained.</p>
<p><strong>Tips and notes:</strong> it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be &gt;=1.</p>
<p>For example, with n=7 and k=3 <code>josephus(7,3)</code> should act this way.</p>
<pre><code>[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] =&gt; 3 is counted out and goes into the result [3]
[1,2,4,5,7] =&gt; 6 is counted out and goes into the result [3,6]
[1,4,5,7] =&gt; 2 is counted out and goes into the result [3,6,2]
[1,4,5] =&gt; 7 is counted out and goes into the result [3,6,2,7]
[1,4] =&gt; 5 is counted out and goes into the result [3,6,2,7,5]
[4] =&gt; 1 is counted out and goes into the result [3,6,2,7,5,1]
[] =&gt; 4 is counted out and goes into the result [3,6,2,7,5,1,4]</code></pre><p>So our final result is:</p>
<pre><code>josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]</code></pre><p>For more info, browse the <a href="http://en.wikipedia.org/wiki/Josephus_problem" target="_blank">Josephus Permutation</a> page on wikipedia; related kata: <a href="http://www.codewars.com/kata/josephus-survivor" target="_blank" title="Josephus sequence - last element">Josephus Survivor</a>.</p>
<p>Also, <a href="https://iguacel.github.io/josephus/" target="_blank">live game demo</a> by <a href="https://www.codewars.com/users/OmniZoetrope" target="_blank">OmniZoetrope</a>.</p>

### Solution