"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function placeholderInHtml(width, height) {
    return `
            <svg width="${width}" height="${height}">
                <rect x="0" y="0" width="${width}" height="${height}" style="fill:rgb(0,0,0);" />
                <text x="${parseInt(width) / 2}" y="${parseInt(height) / 2}" dominant-baseline="middle" text-anchor="middle" fill="white" >${width} x ${height}</text>
                Sorry, your browser does not support inline SVG.  
            </svg>
        `;
}
exports.default = {
    placeholderInHtml
};
