export const stranger_tune = `
/* =========================================================
   GLOBAL TEMPO
   Purpose: Sets the overall speed of the track
   Safe to tweak for faster/slower feel
   ========================================================= */
setcps(140/60/4)

/* ============================
   SAMPLE LIBRARIES
   Purpose: Load all external samples used in this set
   Do not edit unless you know what samples are required
   ============================ */
samples('github:algorave-dave/samples')
samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')

/* ============================
   MUSICAL BUILDING BLOCKS
   Purpose: Rhythmic, melodic, and gain patterns
   These define the sound and groove of the track
   ============================ */

/* Gain shapes used for energy and dynamics
   You can add/remove patterns, but keep structure intact */
const gain_patterns = [
  "2",
  "{0.75 2.5}*4",
  "{0.75 2.5!9 0.75 2.5!5 0.75 2.5 0.75 2.5!7 0.75 2.5!3 <2.5 0.75> 2.5}%16",
]

/* Drum rhythmic masks
   Controls when drum hits occur */
const drum_structure = [
  "~",
  "x*4",
  "{x ~!9 x ~!5 x ~ x ~!7 x ~!3 < ~ x > ~}%16",
]

/* Bass note sequences
   Swap or extend for different harmonic movement */
const basslines = [
  "[[eb1, eb2]!16 [f2, f1]!16 [g2, g1]!16 [f2, f1]!8 [bb2, bb1]!8]/8",
  "[[eb1, eb2]!16 [bb2, bb1]!16 [g2, g1]!16 [f2, f1]!4 [bb1, bb2]!4 [eb1, eb2]!4 [f1, f2]!4]/8"
]

/* Main arpeggiator patterns
   Bright mid/high melodic content */
const arpeggiator1 = [
  "{d4 bb3 eb3 d3 bb2 eb2}%16",
  "{c4 bb3 f3 c3 bb2 f2}%16",
  "{d4 bb3 g3 d3 bb2 g2}%16",
  "{c4 bb3 f3 c3 bb2 f2}%16",
]

/* Alternate / extended arpeggiator patterns
   Use for variation or drops */
const arpeggiator2 = [
  "{d4 bb3 eb3 d3 bb2 eb2}%16",
  "{c4 bb3 f3 c3 bb2 f2}%16",
  "{d4 bb3 g3 d3 bb2 g2}%16",
  "{d5 bb4 g4 d4 bb3 g3 d4 bb3 eb3 d3 bb2 eb2}%16",
]

/* ============================
   INTERNAL SELECTORS
   Purpose: Indexes used to pick patterns above
   These are controlled indirectly during performance
   Safe to tweak live
   ============================ */
const pattern = 0
const bass = 0

/* =========================================================
   PERFORMANCE / ARRANGEMENT STARTS HERE
   ---------------------------------------------------------
   This is the main interaction zone for the user.
   You are expected to tweak values like:
   - <volume>
   - <reverb>
   - pattern / bass indices
   - mute / unmute parts
   ========================================================= */

/* ============================
   BASSLINE
   Primary low-end foundation
   ============================ */
<p2_Radio>bassline:
note(pick(basslines, bass))
.sound("supersaw")
.gain(<volume>)        // MAIN USER CONTROL
.room(<reverb>)        // MAIN USER CONTROL
.lpf(700)
.postgain(pick(gain_patterns, pattern))

/* ============================
   MAIN ARPEGGIATOR
   Mid/high melodic driver
   ============================ */
<p3_Radio>main_arp: 
note(pick(arpeggiator1, "<0 1 2 3>/2"))
.sound("supersaw")
.lpf(300)
.adsr("0:0:.5:.1")
.room(<reverb>)        // MAIN USER CONTROL
.lpenv(3.3)
.gain(<volume>)        // MAIN USER CONTROL
.postgain(pick(gain_patterns, pattern))

/* ============================
   DRUM BUS 1
   Core groove and percussion
   ============================ */
<p1_Radio>drums:
stack(
  s("tech:5")
    .postgain(6 * <volume>)   // MAIN USER CONTROL
    .pcurve(2)
    .pdec(1)
    .struct(pick(drum_structure, pattern)),

  s("sh").struct("[x!3 ~!2 x!10 ~]")
    .postgain(0.5)
    .lpf(7000)
    .bank("RolandTR808")
    .speed(0.8)
    .jux(rev)
    .room(sine.range(0.1,0.4))
    .gain(0.6),

  s("{~ ~ rim ~ cp ~ rim cp ~!2 rim ~ cp ~ < rim ~ >!2}%8 *2")
    .bank("[KorgDDM110, OberheimDmx]")
    .speed(1.2)
    .postgain(.25),
).gain(<volume>)        // MAIN USER CONTROL

/* ============================
   DRUM BUS 2
   Hats, textures, and fills
   ============================ */
<p1_Radio>drums2: 
stack(
  s("[~ hh]*4")
    .bank("RolandTR808")
    .room(0.3)
    .speed(0.75)
    .gain(1.2),

  s("hh")
    .struct("x*16")
    .bank("RolandTR808")
    .gain(0.6 * <volume>)   // MAIN USER CONTROL
    .jux(rev)
    .room(<reverb>)         // MAIN USER CONTROL
    .postgain(0.5),
  
  s("[psr:[2|5|6|7|8|9|12|24|25]*16]?0.1")
    .gain(0.1)
    .postgain(pick(gain_patterns, pattern) * 0.3)
    .hpf(1000)
    .speed(0.5)
    .rarely(jux(rev)),
).gain(<volume>)            // MAIN USER CONTROL

/* =========================================================
   GLOBAL EFFECTS / DEBUG
   ========================================================= */
// Remixed and reproduced from Algorave Dave's code:
// https://www.youtube.com/watch?v=ZCcpWzhekEY

// Uncomment for live mouse control:
// all(x => x.gain(mouseX.range(0,1)))

/* Logging for debugging / performance insight */
all(x => x.log())

// @version 1.2
`;
