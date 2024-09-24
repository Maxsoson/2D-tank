export class Column {
    constructor(x, fontSize, canvasHeight, context, image, direction = 1) {
        this.x = x;
        this.y = direction === 1 ? 0 : canvasHeight;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.context = context;
        this.image = image;
        this.direction = direction;
    }

    drawSymbol() {
        if ((this.direction === 1 && this.y === 0 && Math.random() < 0.98) ||
            (this.direction === -1 && this.y === this.canvasHeight && Math.random() < 0.98)) {
            return;
        }


        if (this.image.complete) {

            this.context.save();

            this.context.translate(this.x + this.fontSize / 2, this.y + this.fontSize / 2);
            if (this.direction === 1) {
                this.context.rotate(Math.PI);
            }

            this.context.drawImage(this.image, -this.fontSize / 2, -this.fontSize / 2, this.fontSize, this.fontSize);

            this.context.restore();
        }

        if (this.direction === 1) {
            if (this.y > this.canvasHeight) {
                this.y = 0;
            } else {
                this.y += this.fontSize;
            }
        } else {
            if (this.y < 0) {
                this.y = this.canvasHeight;
            } else {
                this.y -= this.fontSize;
            }
        }
    }
}
