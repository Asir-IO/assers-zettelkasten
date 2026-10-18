---
title: Asser's Zettelkasten
tabTitle: Welcome to my Place =)
selected:
  - "[[Convolution Sum in LTI systems]]"
  - "[[Agentic Memory]]"
  - "[[Performing 2D Convolution]]"
  - "[[Deletion in a RB Tree]]"
  - "[[Solving a Backpropagation Problem]]"
comments: true
---
<div id="banner" style="border: 4px solid var(--dark); background-color: var(--light); padding: 6px;">
  <div style="width: 100%; height: auto; overflow: hidden; border-radius: 4px; filter: brightness(1.4);">
    <iframe 
      src="static\apps\home-animation.html" 
      frameborder="0" 
      scrolling="no" 
      style="width: 100%; height: auto; mix-blend-mode: multiply; display: block; aspect-ratio: 59 / 13;">
    </iframe>
  </div>
</div>

After three yrs of college, I asked myself:
> How many of the concepts you've learned so far do u recall right *now*?

I blanked. I could barely recall one or two. This is why I created this zettelkasten or digital garden (I'm not sure what to call it, but that's not the point).

This is *(mostly)* a living collection of the work and knowledge that's usually deemed lost after the finals. it includes:
## [[Concepts/index|Concepts]]
> [!two-column]
>
> > [!left|1]
> > 
> > <img src="z1-Assets/icons/concept-icon-2.svg" alt="Concepts Icon" style="width: 64px; height: 64px; min-width: 28px; display: block; margin: 0;  max-width: unset" />
>
> > [!right|9]
> > 
> > > [!with-desc]
> >>Concepts that I successfully found a mental model for.
>>>
> >>> [!desc]
> >>> 
> >>> (usually is a visualization ;)
## [[Strategies/index|Strategies]]
> [!two-column]
>
> > [!left|1]
> > 
> > <img src="z1-Assets/icons/strategy-icon-2.svg" alt="Strategies Icon" style="width: 64px; height: 64px; min-width: 28px; display: block; margin: 0; max-width: unset" />
>
> > [!right|9]
> > 
> > Strategies that I developed/used to help me solve a problem in a more structured way.
## [[Workflows/index|Workflows]]
> [!two-column]
>
> > [!left|1]
> > 
> > <img src="z1-Assets/icons/workflow-icon-2.svg" alt="Workflows Icon" style="width: 64px; height: 64px; min-width: 28px; display: block; margin: 0; max-width: unset" />
>
> > [!right|9]
> > 
> > Workflows that help me do tasks in a smoother way.


> [!Abstract]- A word for FCAI-CU undergrads
> If you're an FCAI-CU undergrad, I've got a few words to tell u (bear with me).
> 
> Computer Science concepts are genuinely beautiful; I like to believe they are a form of art that deserves to be truly understood and appreciated.
> 
> Unfortunately, most of our University's courses are presented in a "*do this and only this because it's simply true. If you didn't, you can't get the grade" fashion with very little emphasis on the intuition that makes things actually work. (I'm only pointing out the issue here, not blaming anyone).
> 
> This environment makes it easy to give up on trying to truly "see" how stuff works. It has pushed me before to compromise actual learning, just to get better at collecting grades.
> 
> Visualizations here may help u look at concepts from a different perspective. But I encourage u to not just view them passively. Take the time to come up with your own original visualization. Create a physical version on paper first, then maybe use Obsidian's Excalidraw to turn it digital and add it to your own zettelkasten =)

> [!warning] Just a heads up
> Do NOT use this if you're cramming for an exam and need anything to help u pass 
> (go solve exams mman).

---
# Recent Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), ![[lab-temp-thumb.excalidraw.svg|120]]) AS "Thumbnail", link(file.path, title) AS "Note", date AS "Added" FROM "" WHERE file.ext = "md" AND !contains(file.name, ".excalidraw") AND !draft SORT date DESC LIMIT 5 -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), ![[lab-temp-thumb.excalidraw.svg|120]]) AS "Thumbnail", link(file.path, title) AS "Note", date AS "Added" FROM "" WHERE file.ext = "md" AND !contains(file.name, ".excalidraw") AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail                               | Note                                                                     | Added              |
| --------------------------------------- | ------------------------------------------------------------------------ | ------------------ |
| ![[lab-temp-thumb.excalidraw.svg\|120]] | [[LSTM with Attention]] | September 27, 2026 |
| ![[lab-temp-thumb.excalidraw.svg\|120]] | [[A-Star Search]]                             | June 03, 2026      |
| ![[lab-temp-thumb.excalidraw.svg\|120]] | [[Uniform Cost Search]]                 | June 03, 2026      |
| ![[lab-temp-thumb.excalidraw.svg\|120]] | [[Agent Architectures]]                 | June 02, 2026      |
| ![[lab-temp-thumb.excalidraw.svg\|120]] | [[Minimax Algorithm]]                     | May 31, 2026       |

<!-- SerializedQuery END -->

---
# Selected Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(item.thumbnail, "!" + replace(string(item.thumbnail), "]]", "|120]]"), ![[lab-temp-thumb.excalidraw.svg|120]]) AS "Thumbnail", link(item.file.path, item.title) AS "Note", choice(item.file.etags AND length(filter(item.file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(item.file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" WHERE file.path = this.file.path FLATTEN this.selected AS item WHERE !item.draft -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(item.thumbnail, "!" + replace(string(item.thumbnail), "]]", "|120]]"), ![[lab-temp-thumb.excalidraw.svg|120]]) AS "Thumbnail", link(item.file.path, item.title) AS "Note", choice(item.file.etags AND length(filter(item.file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(item.file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" WHERE file.path = this.file.path FLATTEN this.selected AS item WHERE !item.draft -->

| Thumbnail                                                                                                                                                      | Note                                                                                   | Type     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------- |
| ![[Convolution Sum 2026-01-24 23.41.52.excalidraw.svg\|Convolution Sum 2026-01-24 23.41.52.excalidraw.svg\|120]]                                     | [[Convolution Sum in LTI systems]]         | Concept  |
| ![[LLM Memory 2026-04-12 18.01.32.excalidraw.svg\|LLM Memory 2026-04-12 18.01.32.excalidraw.svg\|120]]                                               | [[Agentic Memory]]                                         | Concept  |
| ![[Performing 2D Convolution 2026-03-29 23.41.19.excalidraw.svg\|Performing 2D Convolution 2026-03-29 23.41.19.excalidraw.svg\|120]]                 | [[Performing 2D Convolution]]                 | Strategy |
| ![[Deletion in a RB Tree 2026-01-13 18.37.35.excalidraw.svg\|Deletion in a RB Tree 2026-01-13 18.37.35.excalidraw.svg\|120]]                         | [[Deletion in a RB Tree]]                         | Strategy |
| ![[Solving a Backpropagation Problem 2026-04-10 00.08.13.excalidraw.svg\|Solving a Backpropagation Problem 2026-04-10 00.08.13.excalidraw.svg\|120]] | [[Solving a Backpropagation Problem]] | Strategy |

<!-- SerializedQuery END -->

---
# The Core
You may have noticed a folder named [[Core/index|Core]] in the explorer. This is my thoughts dump. You'll find there thoughts that aren't exactly a concept, a strategy, or a workflow. <br>
You're welcome to scroll through stuff there ofc, but yeah, you do this at your *own risk* (I'm a highly chaotic being)

---
# University Courses 
I've grouped [[university courses|here]] content for each FCAI-CU course I experienced (organized by Level & Semester).

---
# Who am I
This is `Asser`, a senior Computer Science student at Cairo University (AI Department).

I'm the one who created this (with generous assistance from my buddy Gemmy).
> [!desc]
> (Gemmy thinks i'm a narcissist for mentioning my name this many times, I sure hope I'm not =\`)
# Where to find me
> [!two-column|0]
>
> > [!left|1]
> > 
> > <a href="https://discord.com/users/1091021223623925931" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;"><i class="fa-brands fa-discord" style="font-size: 26px;"></i></a>
>
> > [!right|9]
> > 
> > <div style="display: flex; flex-direction: column; justify-content: center; line-height: 1.4; margin-bottom: 1rem"> <span><code>itsasir</code> (username)</span><span style="font-size: 0.9em; opacity: 0.8;"> This is my preferred way to connect with humans =) </span></div>

> [!two-column|0]
>
> > [!left|1]
> > 
> > <a href="https://www.facebook.com/asser.ahmed.rushdy/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;"><i class="fa-brands fa-square-facebook" style="font-size: 26px;"></i></a>
>
> > [!right|9]
> > 
> > This is an option too, I guess.

> [!two-column|0]
>
> > [!left|1]
> > 
> > <a href="https://www.linkedin.com/in/asser-ahmed-roshdy" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;"><i class="fa-brands fa-linkedin" style="font-size: 26px;"></i></a>
>
> > [!right|9]
> > 
> > <span>I have a linkedin too (but it's basically dead)</span> 

> [!two-column|0]
>
> > [!left|1]
> > 
> > <a href="https://github.com/Asir-IO" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;"><i class="fa-brands fa-github" style="font-size: 26px;"></i></a>
>
> > [!right|9]
> > 
> > You won't find me there, but you'll find more of my creations.

