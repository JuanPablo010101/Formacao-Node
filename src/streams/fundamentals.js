//Netflix e Spotify
//Conseguir ler pequenas partes de alguma coisa e conseguir trabalhar sem ter o arquivo completo.
// process.stdin.pipe(process.stdout)

import { Readable, Transform, Writable } from 'node:stream';
//Stream de Leitura enviar dados ,fornecer
class OneToHundredStream extends Readable {
  index = 1;
  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}
class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    callback(null, Buffer.from(String(transformed)));
  }
}
class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    const num = Number(chunk.toString());
    console.log(num, ' ', Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream());
