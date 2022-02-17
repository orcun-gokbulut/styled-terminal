import { expect } from "chai";
import { TerminalStylerStream, TerminalColor } from "./terminal-styler";

describe("TerminalStylerstream", function()
{
    it("should ouput colored and styled text", function()
    {
        const stream = new TerminalStylerStream();

        const errorMessage = "Unknown error occurred.";
        stream.write(" RECEIVED ", { foregroundColor: TerminalColor.white, backgroundColor: TerminalColor.green, dim: false, bold: true, italic: true });
        stream.write(" [MainFunction] ", { foregroundColor: TerminalColor.white, bold: true });
        stream.write("Error: ", { foregroundColor: TerminalColor.red });
        stream.write(errorMessage, null);

        const output = stream.end();
        console.log(output);

        expect(output).to.be.equal("[3m[1m[42m[37m RECEIVED [39m[49m[22m[23m[1m[37m [MainFunction] [39m[22m[31mError: [39mUnknown error occurred.");
    });
});
