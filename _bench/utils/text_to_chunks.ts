export function split(text: string, columns: number) {
  const rows = [];
  let rowBuffer = "";
  let rowBufferLength = 0;
  let wordBuffer = "";
  let wordBufferLength = 0;
  let spillBuffer = "";
  let spillBufferLength = 0;

  for (const char of text.normalize()) {
    const code = char.codePointAt(0);

    if (code && code <= 32) {
      if (spillBufferLength > 0) {
        rows.push(rowBuffer);

        if (wordBufferLength + spillBufferLength === columns || code === 10) {
          rows.push(wordBuffer + spillBuffer);

          rowBuffer = "";
          rowBufferLength = 0;
        } else {
          rowBuffer = wordBuffer + spillBuffer + char;
          rowBufferLength = wordBufferLength + spillBufferLength + 1;
        }

        spillBuffer = "";
        spillBufferLength = 0;
      } else {
        if (rowBufferLength + wordBufferLength === columns || code === 10) {
          rows.push(rowBuffer + wordBuffer);

          rowBuffer = "";
          rowBufferLength = 0;
        } else {
          rowBuffer += wordBuffer + char;
          rowBufferLength += wordBufferLength + 1;
        }
      }

      wordBuffer = "";
      wordBufferLength = 0;
    } else {
      if (rowBufferLength + wordBufferLength < columns) {
        wordBuffer += char;
        wordBufferLength++;
      } else if (wordBufferLength + spillBufferLength === columns) {
        rows.push(rowBuffer + wordBuffer);

        rowBuffer = "";
        rowBufferLength = 0;

        if (spillBufferLength === columns) {
          rows.push(spillBuffer);

          wordBuffer = char;
          wordBufferLength = 1;
        } else {
          wordBuffer = spillBuffer + char;
          wordBufferLength = spillBufferLength + 1;
        }

        spillBuffer = "";
        spillBufferLength = 0;
      } else {
        spillBuffer += char;
        spillBufferLength++;
      }
    }
  }

  if (spillBufferLength > 0) {
    rows.push(rowBuffer, wordBuffer + spillBuffer);
  } else {
    rows.push(rowBuffer + wordBuffer);
  }

  return rows;
}

export function width(text: string, max: number) {
  let i = 0;
  let u = 0;

  for (const char of text.normalize()) {
    if (char === "\n") {
      u = i > u ? i : u;
      i = 0;
    } else if (++i === max) {
      return max;
    }
  }

  return i > u ? i : u;
}
