### Problem:
<p>Automatons, or Finite State Machines (FSM), are extremely useful to programmers when it comes to software design. You will be given a simplistic version of an FSM to code for a basic TCP session.</p>
<p>The outcome of this exercise will be to return the correct state of the TCP FSM based on the array of events given.</p>
<hr>
<p>The input array of events will consist of one or more of the following strings:</p>
<pre><code>APP_PASSIVE_OPEN, APP_ACTIVE_OPEN, APP_SEND, APP_CLOSE, APP_TIMEOUT, RCV_SYN, RCV_ACK, RCV_SYN_ACK, RCV_FIN, RCV_FIN_ACK</code></pre><hr>
<p>The states are as follows and should be returned in all capital letters as shown:</p>
<pre><code>CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED, CLOSE_WAIT, LAST_ACK, FIN_WAIT_1, FIN_WAIT_2, CLOSING, TIME_WAIT</code></pre><hr>
<p>The input will be an array of events. Your job is to traverse the FSM as determined by the events, and return the proper state as a string, all caps, as shown above.</p>
<p>If an event is not applicable to the current state, your code will return <code>&quot;ERROR&quot;</code>.</p>
<h3 id="action-of-each-event-upon-each-state">Action of each event upon each state:</h3>
<p>(the format is <code>INITIAL_STATE: EVENT -&gt; NEW_STATE</code>)</p>
<pre><code>CLOSED: APP_PASSIVE_OPEN -&gt; LISTEN
CLOSED: APP_ACTIVE_OPEN  -&gt; SYN_SENT
LISTEN: RCV_SYN          -&gt; SYN_RCVD
LISTEN: APP_SEND         -&gt; SYN_SENT
LISTEN: APP_CLOSE        -&gt; CLOSED
SYN_RCVD: APP_CLOSE      -&gt; FIN_WAIT_1
SYN_RCVD: RCV_ACK        -&gt; ESTABLISHED
SYN_SENT: RCV_SYN        -&gt; SYN_RCVD
SYN_SENT: RCV_SYN_ACK    -&gt; ESTABLISHED
SYN_SENT: APP_CLOSE      -&gt; CLOSED
ESTABLISHED: APP_CLOSE   -&gt; FIN_WAIT_1
ESTABLISHED: RCV_FIN     -&gt; CLOSE_WAIT
FIN_WAIT_1: RCV_FIN      -&gt; CLOSING
FIN_WAIT_1: RCV_FIN_ACK  -&gt; TIME_WAIT
FIN_WAIT_1: RCV_ACK      -&gt; FIN_WAIT_2
CLOSING: RCV_ACK         -&gt; TIME_WAIT
FIN_WAIT_2: RCV_FIN      -&gt; TIME_WAIT
TIME_WAIT: APP_TIMEOUT   -&gt; CLOSED
CLOSE_WAIT: APP_CLOSE    -&gt; LAST_ACK
LAST_ACK: RCV_ACK        -&gt; CLOSED</code></pre><p><img src="http://theangelfallseries.com/img/EFSM_TCP.png" alt="&quot;EFSM TCP&quot; "></p>
<h2 id="examples">Examples</h2>
<pre><code>[&quot;APP_PASSIVE_OPEN&quot;, &quot;APP_SEND&quot;, &quot;RCV_SYN_ACK&quot;] =&gt;  &quot;ESTABLISHED&quot;

[&quot;APP_ACTIVE_OPEN&quot;] =&gt;  &quot;SYN_SENT&quot;

[&quot;APP_ACTIVE_OPEN&quot;, &quot;RCV_SYN_ACK&quot;, &quot;APP_CLOSE&quot;, &quot;RCV_FIN_ACK&quot;, &quot;RCV_ACK&quot;] =&gt;  &quot;ERROR&quot;</code></pre><p>This kata is similar to <a href="https://www.codewars.com/kata/design-a-simple-automaton-finite-state-machine" target="_blank">Design a Simple Automaton (Finite State Machine)</a>, and you may wish to try that kata before tackling this one.</p>
<p>See wikipedia page <a href="http://en.wikipedia.org/wiki/Transmission_Control_Protocol" target="_blank">Transmission Control Protocol</a>
for further details.</p>
<p>See <a href="http://www.medianet.kent.edu/techreports/TR2005-07-22-tcp-EFSM.pdf" target="_blank">http://www.medianet.kent.edu/techreports/TR2005-07-22-tcp-EFSM.pdf</a> page 4, for the FSM diagram used for this kata.</p>

### Solution