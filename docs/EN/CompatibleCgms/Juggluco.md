# Juggluco settings

If not already set up, then download [Juggluco](https://www.juggluco.nl/Juggluco/download.html).

Follow the [instructions](https://www.juggluco.nl/Jugglucohelp/introhelp.html) to connect your sensor.

## Basic settings for all CGM systems

### Disable Nightscout uploader

Starting with AAPS 3.2, you shouldn't let any other app upload data (blood glucose and treatments) to Nightscout.

Disable any active uploader to Nightscout in Juggluco.

![Disable Nightscout Upload](../images/juggluco/DisableNightscoutUpload.png)

(juggluco-to-aaps)=

## Juggluco to AAPS

Juggluco can send blood glucose directly to AAPS, enabling SMBs always if you are using a [trusted sensor](#GettingStarted-TrustedBGSource).

When using a Libre 2/2+/3/3+ sensor, minute-by-minute readings will be sent to AAPS but will not trigger minute-by-minute calculations in AAPS.

Enable xDrip broadcast in Juggluco (do not enable Patched Libre), confirm and save the AAPS package information. Select the xDrip+ BG data source in AAPS.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS.

![Juggluco to AAPS](../images/juggluco/Juggluco-AAPS.png)

(juggluco-to-xdrip)=

## Juggluco to xDrip+

Juggluco can send blood glucose to xDrip+ which will then send them to AAPS.

Enable Patched Libre in Juggluco (do not enable xDrip broadcast), confirm and save the dexdrip package information. Select the xDrip+ BG data source in AAPS.

Apply sufficient [smoothing](./SmoothingBloodGlucoseData.md) in AAPS if necessary, when using a Libre 2/2+/3/3+ sensor, xDrip+ will average the minute-by-minute to 5 minutes readings and [also smoothen](#libre2-value-smoothing-raw-values) them.

![Juggluco to xDrip+](../images/juggluco/Juggluco-xDrip+.png)

(juggluco-qr-code)=

## Missing G7 QR code

To pair a G7 you need the inserter QR code. This might be an issue if you threw it or lost it.

Use the script below to generate a compatible DataMatrix.

<!--
Embedded DATAMatrix implementation below is adapted from https://github.com/datalog/datamatrix-svg
and used under the MIT License.

Original notice:
Copyright (c) 2020 datalog

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->

<div id="juggluco-g7-generator" style="border: 1px solid #d8d8d8; border-radius: 12px; padding: 1rem; margin-top: 1rem; background: #ffffff;">
	<label for="juggluco-g7-code" style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Enter the 4-digits G7 code</label>
	<div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
		<input id="juggluco-g7-code" type="text" inputmode="text" maxlength="4" value="ABCD" autocomplete="off" spellcheck="false" style="width: 100%; max-width: 12rem; padding: 0.65rem 0.75rem; border: 1px solid #bdbdbd; border-radius: 8px; font: 600 1rem/1.2 monospace; text-transform: uppercase; letter-spacing: 0.18em; box-sizing: border-box;" />
		<button id="juggluco-g7-create" type="button" style="padding: 0.7rem 1rem; border: 1px solid #333333; border-radius: 8px; background: #111111; color: #ffffff; font-weight: 600; cursor: pointer;">Create</button>
	</div>
	<div id="juggluco-g7-matrix" style="margin-top: 1rem; display: inline-flex; padding: 0.75rem; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 12px;"></div>
</div>

<script>
function DATAMatrix(Q) {
	var M = [];
	var xx = 0;
	var yy = 0;

	var bit = function (x, y) {
		M[y] = M[y] || [];
		M[y][x] = 1;
	};

	var toAscii = function (t) {
		var r = [];
		var l = t.length;

		for (var i = 0; i < l; i++) {
			var c = t.charCodeAt(i);
			var c1 = i + 1 < l ? t.charCodeAt(i + 1) : 0;

			if (c > 47 && c < 58 && c1 > 47 && c1 < 58) {
				r.push((c - 48) * 10 + c1 + 82);
				i++;
			} else if (c > 127) {
				r.push(235);
				r.push((c - 127) & 255);
			} else {
				r.push(c + 1);
			}
		}

		return r;
	};

	var toBase = function (t) {
		var r = [231];
		var l = t.length;

		if (250 < l) {
			r.push((37 + (l / 250 | 0)) & 255);
		}

		r.push((l % 250 + (149 * (r.length + 1)) % 255 + 1) & 255);

		for (var i = 0; i < l; i++) {
			r.push((t.charCodeAt(i) + (149 * (r.length + 1)) % 255 + 1) & 255);
		}

		return r;
	};

	var toEdifact = function (t) {
		var n = t.length;
		var l = (n + 1) & -4;
		var cw = 0;
		var ch;
		var r = l > 0 ? [240] : [];

		for (var i = 0; i < l; i++) {
			if (i < l - 1) {
				ch = t.charCodeAt(i);
				if (ch < 32 || ch > 94) {
					return [];
				}
			} else {
				ch = 31;
			}

			cw = cw * 64 + (ch & 63);

			if ((i & 3) === 3) {
				r.push(cw >> 16);
				r.push((cw >> 8) & 255);
				r.push(cw & 255);
				cw = 0;
			}
		}

		return l > n ? r : r.concat(toAscii(t.substr(l === 0 ? 0 : l - 1)));
	};

	var toText = function (t, s) {
		var i;
		var j;
		var cc = 0;
		var cw = 0;
		var l = t.length;
		var r = [s[0]];

		var push = function (v) {
			cw = 40 * cw + v;

			if (cc++ === 2) {
				r.push(++cw >> 8);
				r.push(cw & 255);
				cc = 0;
				cw = 0;
			}
		};

		for (i = 0; i < l; i++) {
			if (cc === 0 && i === l - 1) {
				break;
			}

			var ch = t.charCodeAt(i);

			if (ch > 127 && r[0] !== 238) {
				push(1);
				push(30);
				ch -= 128;
			}

			for (j = 1; ch > s[j]; j += 3) {
				// advance through char map
			}

			var x = s[j + 1];

			if (x === 8 || (x === 9 && cc === 0 && i === l - 1)) {
				return [];
			}

			if (x < 5 && cc === 2 && i === l - 1) {
				break;
			}

			if (x < 5) {
				push(x);
			}

			push(ch - s[j + 2]);
		}

		if (cc === 2 && r[0] !== 238) {
			push(0);
		}

		r.push(254);

		if (cc > 0 || i < l) {
			r = r.concat(toAscii(t.substr(i - cc)));
		}

		return r;
	};

	var encodeMsg = function (text, rct) {
		text = unescape(encodeURI(text));

		var enc = toAscii(text);
		var el = enc.length;
		var k = toText(text, [230, 31, 0, 0, 32, 9, 29, 47, 1, 33, 57, 9, 44, 64, 1, 43, 90, 9, 51, 95, 1, 69, 127, 2, 96, 255, 1, 0]);
		var l = k.length;

		if (l > 0 && l < el) {
			enc = k;
			el = l;
		}

		k = toText(text, [239, 31, 0, 0, 32, 9, 29, 47, 1, 33, 57, 9, 44, 64, 1, 43, 90, 2, 64, 95, 1, 69, 122, 9, 83, 127, 2, 96, 255, 1, 0]);
		l = k.length;
		if (l > 0 && l < el) {
			enc = k;
			el = l;
		}

		k = toText(text, [238, 12, 8, 0, 13, 9, 13, 31, 8, 0, 32, 9, 29, 41, 8, 0, 42, 9, 41, 47, 8, 0, 57, 9, 44, 64, 8, 0, 90, 9, 51, 255, 8, 0]);
		l = k.length;
		if (l > 0 && l < el) {
			enc = k;
			el = l;
		}

		k = toEdifact(text);
		l = k.length;
		if (l > 0 && l < el) {
			enc = k;
			el = l;
		}

		k = toBase(text);
		l = k.length;
		if (l > 0 && l < el) {
			enc = k;
			el = l;
		}

		var h;
		var w;
		var nc = 1;
		var nr = 1;
		var fw;
		var fh;
		var i;
		var j = -1;
		var c;
		var r;
		var s;
		var b = 1;
		var rs = new Array(70);
		var rc = new Array(70);
		var lg = new Array(256);
		var ex = new Array(255);

		if (rct && el < 50) {
			k = [16, 7, 28, 11, 24, 14, 32, 18, 32, 24, 44, 28];

			do {
				w = k[++j];
				h = 6 + (j & 12);
				l = (w * h) / 8;
			} while (l - k[++j] < el);

			if (w > 25) {
				nc = 2;
			}
		} else {
			w = 6;
			h = 6;
			i = 2;
			k = [5, 7, 10, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 68, 84, 112, 144, 192, 224, 272, 336, 408, 496, 620];

			do {
				if (++j === k.length) {
					return [0, 0];
				}

				if (w > 11 * i) {
					i = (4 + i) & 12;
				}

				w = h += i;
				l = (w * h) >> 3;
			} while (l - k[j] < el);

			if (w > 27) {
				nr = nc = 2 * ((w / 54) | 0) + 2;
			}

			if (l > 255) {
				b = 2 * (l >> 9) + 2;
			}
		}

		s = k[j];
		fw = w / nc;
		fh = h / nr;

		if (el < l - s) {
			enc[el++] = 129;
		}

		while (el < l - s) {
			enc[el++] = (((149 * el) % 253) + 130) % 254;
		}

		s /= b;

		for (j = 1, i = 0; i < 255; i++) {
			ex[i] = j;
			lg[j] = i;
			j += j;

			if (j > 255) {
				j ^= 301;
			}
		}

		for (rs[s] = 0, i = 1; i <= s; i++) {
			for (j = s - i, rs[j] = 1; j < s; j++) {
				rs[j] = rs[j + 1] ^ ex[(lg[rs[j]] + i) % 255];
			}
		}

		for (c = 0; c < b; c++) {
			for (i = 0; i <= s; i++) {
				rc[i] = 0;
			}

			for (i = c; i < el; i += b) {
				for (j = 0, x = rc[0] ^ enc[i]; j < s; j++) {
					rc[j] = rc[j + 1] ^ (x ? ex[(lg[rs[j]] + lg[x]) % 255] : 0);
				}
			}

			for (i = 0; i < s; i++) {
				enc[el + c + i * b] = rc[i];
			}
		}

		for (i = 0; i < h + 2 * nr; i += fh + 2) {
			for (j = 0; j < w + 2 * nc; j++) {
				bit(j, i + fh + 1);
				if ((j & 1) === 0) {
					bit(j, i);
				}
			}
		}

		for (i = 0; i < w + 2 * nc; i += fw + 2) {
			for (j = 0; j < h; j++) {
				bit(i, j + ((j / fh) | 0) * 2 + 1);
				if ((j & 1) === 1) {
					bit(i + fw + 1, j + ((j / fh) | 0) * 2);
				}
			}
		}

		s = 2;
		c = 0;
		r = 4;
		b = [0, 0, -1, 0, -2, 0, 0, -1, -1, -1, -2, -1, -1, -2, -2, -2];

		for (i = 0; i < l; r -= s, c += s) {
			if (r === h - 3 && c === -1) {
				k = [w, 6 - h, w, 5 - h, w, 4 - h, w, 3 - h, w - 1, 3 - h, 3, 2, 2, 2, 1, 2];
			} else if (r === h + 1 && c === 1 && (w & 7) === 0 && (h & 7) === 6) {
				k = [w - 2, -h, w - 3, -h, w - 4, -h, w - 2, -1 - h, w - 3, -1 - h, w - 4, -1 - h, w - 2, -2, -1, -2];
			} else {
				if (r === 0 && c === w - 2 && (w & 3)) {
					continue;
				}

				if (r < 0 || c >= w || r >= h || c < 0) {
					s = -s;
					r += 2 + s / 2;
					c += 2 - s / 2;

					while (r < 0 || c >= w || r >= h || c < 0) {
						r -= s;
						c += s;
					}
				}

				if (r === h - 2 && c === 0 && (w & 3)) {
					k = [w - 1, 3 - h, w - 1, 2 - h, w - 2, 2 - h, w - 3, 2 - h, w - 4, 2 - h, 0, 1, 0, 0, 0, -1];
				} else if (r === h - 2 && c === 0 && (w & 7) === 4) {
					k = [w - 1, 5 - h, w - 1, 4 - h, w - 1, 3 - h, w - 1, 2 - h, w - 2, 2 - h, 0, 1, 0, 0, 0, -1];
				} else if (r === 1 && c === w - 1 && (w & 7) === 0 && (h & 7) === 6) {
					continue;
				} else {
					k = b;
				}
			}

			for (el = enc[i++], j = 0; el > 0; j += 2, el >>= 1) {
				if (el & 1) {
					var x = c + k[j];
					var y = r + k[j + 1];

					if (x < 0) {
						x += w;
						y += 4 - ((w + 4) & 7);
					}

					if (y < 0) {
						y += h;
						x += 4 - ((h + 4) & 7);
					}

					bit(x + 2 * ((x / fw) | 0) + 1, y + 2 * ((y / fh) | 0) + 1);
				}
			}
		}

		for (i = w; i & 3; i--) {
			bit(i, i);
		}

		xx = w + 2 * nc;
		yy = h + 2 * nr;
	};

	return (function () {
		function ishex(c) {
			return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(c);
		}

		function svg(n, a) {
			var node = document.createElementNS('http://www.w3.org/2000/svg', n);

			for (var o in a || {}) {
				node.setAttribute(o, a[o]);
			}

			return node;
		}

		var abs = Math.abs;
		var path = '';
		var q = typeof Q === 'string' ? { msg: Q } : Q || {};
		var p = q.pal || ['#000'];
		var dm = abs(q.dim) || 256;
		var pd = abs(q.pad);
		pd = pd > -1 ? pd : 2;
		var mx = [1, 0, 0, 1, pd, pd];
		var fg = ishex(p[0]) ? p[0] : '#000';
		var bg = ishex(p[1]) ? p[1] : 0;
		var optimized = q.vrb ? 0 : 1;

		encodeMsg(q.msg || '', q.rct);

		var sx = xx + pd * 2;
		var sy = yy + pd * 2;
		var y = yy;

		while (y--) {
			var d = 0;
			var x = xx;

			while (x--) {
				if (M[y][x]) {
					if (optimized) {
						d++;

						if (!M[y][x - 1]) {
							path += 'M' + x + ',' + y + 'h' + d + 'v1h-' + d + 'v-1z';
							d = 0;
						}
					} else {
						path += 'M' + x + ',' + y + 'h1v1h-1v-1z';
					}
				}
			}
		}

		var r = svg('svg', {
			viewBox: [0, 0, sx, sy].join(' '),
			width: (dm / sy) * sx | 0,
			height: dm,
			fill: fg,
			'shape-rendering': 'crispEdges',
			xmlns: 'http://www.w3.org/2000/svg',
			version: '1.1'
		});

		if (bg) {
			r.appendChild(svg('path', {
				fill: bg,
				d: 'M0,0v' + sy + 'h' + sx + 'V0H0Z'
			}));
		}

		r.appendChild(svg('path', {
			transform: 'matrix(' + mx + ')',
			d: path
		}));

		return r;
	})();
}

(function () {
	var input = document.getElementById('juggluco-g7-code');
	var createButton = document.getElementById('juggluco-g7-create');
	var matrixNode = document.getElementById('juggluco-g7-matrix');
	var prefix = '0100000000000001210000000000011126010117370101240';

	if (!input || !createButton || !matrixNode) {
		return;
	}

	function normalizeCode(value) {
		return value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
	}

	function render() {
		var code = normalizeCode(input.value);
		input.value = code;

		if (code.length !== 4) {
			matrixNode.replaceChildren();
			return;
		}

		matrixNode.replaceChildren(DATAMatrix({
			msg: prefix + code,
			dim: 256,
			pad: 0,
			pal: ['#000', '#fff']
		}));
	}

	createButton.addEventListener('click', render);
	input.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			event.preventDefault();
			render();
		}
	});
	input.addEventListener('input', function () {
		input.value = normalizeCode(input.value);
		matrixNode.replaceChildren();
	});
})();
</script>

