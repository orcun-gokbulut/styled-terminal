import colors from 'colors/safe';

export enum TerminalColor
{
    default = -1,
    black   = 0,
    red     = 1,
    green   = 2,
    yellow  = 3,
    blue    = 4,
    magenta = 5,
    cyan    = 6,
    white   = 7,
    gray    = 8
};

export interface TerminalStyle
{
    foregroundColor? : TerminalColor;
    backgroundColor? : TerminalColor;

    dim? : boolean;
    bold? : boolean;
    italic? : boolean;
    underline? : boolean;
    strike? : boolean;
    inverse? : boolean;
}
export class TerminalStylerStream
{
    private output : string = "";
    private buffer : string = "";
    private currentStyle : TerminalStyle | null = null;

    private applyStyle(text : string, style : TerminalStyle) : string
    {
        let output = "";
        switch (style.foregroundColor!)
        {
            default:
            case TerminalColor.default:
                output = text;
                break;

            case TerminalColor.black:
                output = colors.black(text);
                break;

            case TerminalColor.red:
                output = colors.red(text);
                break;

            case TerminalColor.green:
                output = colors.green(text);
                break;

            case TerminalColor.yellow:
                output = colors.yellow(text);
                break;

            case TerminalColor.blue:
                output = colors.blue(text);
                break;

            case TerminalColor.magenta:
                output = colors.magenta(text);
                break;

            case TerminalColor.cyan:
                output = colors.cyan(text);
                break;

            case TerminalColor.white:
                output = colors.white(text);
                break;

            case TerminalColor.gray:
                output = colors.gray(text);
                break;
        }

        switch (style.backgroundColor!)
        {
            default:
            case TerminalColor.default:
                break;

            case TerminalColor.black:
                output = colors.bgBlack(output);
                break;

            case TerminalColor.red:
                output = colors.bgRed(output);
                break;

            case TerminalColor.green:
                output = colors.bgGreen(output);
                break;

            case TerminalColor.yellow:
                output = colors.bgYellow(output);
                break;

            case TerminalColor.blue:
                output = colors.bgBlue(output);
                break;

            case TerminalColor.magenta:
                output = colors.bgMagenta(output);
                break;

            case TerminalColor.cyan:
                output = colors.bgCyan(output);
                break;

            case TerminalColor.white:
                output = colors.bgWhite(output);
                break;

            case TerminalColor.gray:
                output = colors.bgWhite(output);
                break;
        }

        if (style.dim)
            output = colors.dim(output);

        if (style.bold)
            output = colors.bold(output);

        if (style.italic)
            output = colors.italic(output);

        if (style.underline)
            output = colors.underline(output);

        if (style.strike)
            output = colors.strikethrough(output);

        if (style.inverse)
            output = colors.inverse(output);

        return output;
    }

    private render()
    {
        if (this.buffer === "")
            return;

        if (this.currentStyle === null)
            this.output += this.buffer;
        else
            this.output += this.applyStyle(this.buffer, this.currentStyle);

        this.buffer = "";
    }

    public write(text : string, style : TerminalStyle | null)
    {
        if (text === "")
            return;

        if (this.currentStyle !== style)
        {
            this.render();
            this.currentStyle = style;
        }

        this.buffer += text;
    }

    public end() : string
    {
        this.render();
        this.currentStyle = null;
        const temp = this.output;
        this.output = "";
        return temp;
    }
};
