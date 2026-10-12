---
title: LSTM with Attention
date: 2026-09-27
tags:
  - type/concept
  - course/
  - domain/
  - baby
draft: true
thumbnail:
comments: true
related-notes:
---
![[LSTM with Attention 2026-09-27 12.51.27.excalidraw]]

![[LSTM with Attention 2026-09-27 13.44.58.excalidraw]]

# With Queries Keys Values Attention
(calculating each output word at a time/using LSTMs)   
![[LSTM with Attention 2026-09-27 19.35.36.excalidraw]]   

(calculating all of them at once/using positional encoding instead of LSTMs)    
... which would require masking out the weights of upcoming words in the input sequence for an earlier output word.   
![[LSTM with Attention 2026-09-27 20.59.37.excalidraw]]

![[LSTM with Attention 2026-09-29 11.37.30.excalidraw]]

---
# Example
...

---
# Related Notes
<!-- QueryToSerialize: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID choice(thumbnail, "!" + replace(string(thumbnail), "]]", "|120]]"), "![[lab-temp-thumb.excalidraw.svg|120]]") AS "Thumbnail", link(file.path, title) AS "Note", choice( file.etags AND length(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6)) > 0, join(map(filter(file.etags, (t) => startswith(string(t), "#type/") AND length(string(t)) > 6), (t) => upper(substring(replace(string(t), "#type/", ""), 0, 1)) + substring(replace(string(t), "#type/", ""), 1, 100) ), ", "), "N/A" ) AS "Type" FROM "" WHERE contains(this["related-notes"], file.link) AND !draft SORT date DESC LIMIT 5 -->

| Thumbnail | Note | Type |
| --------- | ---- | ---- |

<!-- SerializedQuery END -->

---
# Sources

- 