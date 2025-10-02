const questions = [];
document.addEventListener("DOMContentLoaded", () => {
  console.log("ready", sources);
  let c = "";
  sources.forEach((x, i) => {
    const a = [];
    c = x.c || c;
    x.a = x.a?.trim() || "";
    let t = 1;
    let splitText = ["- ( )", "- (x)"];
    if (!x.a.startsWith("- (")) {
      t = 2;
      splitText = ["- [ ]", "- [x]"];
    }
    const as = x.a.split("\n").filter((t) => !!t);
    as.forEach((t) => {
      let text = t.trim();
      let right = false;
      if (text.startsWith(splitText[1])) {
        right = true;
      }
      text = text.replace(right ? splitText[1] : splitText[0], "").trim();
      a.push({
        text,
        right,
      });
    });
    const q = {
      i,
      c,
      q: x.q,
      t: a.filter((t) => t.right).length == 1 ? 1 : 2,
      a,
    };
    if (a.length) {
      questions.push(JSON.stringify(q));
    }
  });
  console.log(questions);
  onReset();
  document.getElementById("submit").addEventListener("click", onSubmit);
  document.getElementById("next").addEventListener("click", onReset);
});

const onSubmit = () => {
  question.a.forEach((x, i) => {
    const el = document.querySelector(`.item.item_${i}`);
    el.classList.remove(...["right", "wrong"]);
    if (x.right) {
      el.classList.add("right");
    } else if (x.select) {
      el.classList.add("wrong");
    }
  });
};
var question;
const onReset = () => {
  const cEl = document.getElementById("category");
  const qEl = document.getElementById("question");
  const aEl = document.getElementById("answer");
  question = JSON.parse(
    questions[Math.floor(Math.random() * questions.length)]
  );
  cEl.innerText = question.c;
  qEl.innerText = question.q;
  aEl.innerHTML = "";
  question.a.forEach((x, i) => {
    let div = document.createElement("div");
    let input = document.createElement("input");
    div.className = `item item_${i}`;

    input.id = `input_${i}`;
    input.type = question.t == 1 ? "radio" : "checkbox";
    input.name = "input";
    input.value = i;
    input.addEventListener("change", (e) =>
      onSelect(question, question.t == 1 ? input.value : input.checked, i)
    );
    let label = document.createElement("label");
    label.setAttribute("for", `input_${i}`);
    label.innerHTML = x.text;
    div.appendChild(input);
    div.appendChild(label);
    aEl.appendChild(div);
  });
};

const onSelect = (question, val, i) => {
  if (question.t == 1) {
    question.a.forEach((x) => {
      x.select = false;
    });
    question.a[val].select = true;
  } else {
    question.a[i].select = val;
  }
  console.log(question, val, i);
};
