import { Command, Flags } from "@oclif/core";
import * as execa from "execa";

const divider = ": ";

export default class Commit extends Command {
  static description = "run 'git commit' with current branch name prefix.";

  static examples = [`$ commit-prefix-manager commit "commit message"`];

  static flags = {
    from: Flags.string({
      char: "f",
      description: "Who is saying hello",
      required: true,
    }),
  };

  // static args = [
  //   { name: "person", description: "Person to say hello to", required: true },
  // ];

  async run(): Promise<void> {
    // const { args, flags } = await this.parse(Commit);
    try {
      // const answer = await inquirer.prompt(questions);

      // const title = `${answer.gitmoji} ${answer.title}`;
      // const body = `${answer.message}`;

      const result = await this.commit("a", "b");
      this.log(result);
    } catch (e) {
      this.errorMessage(e);
    }
  }

  private async commit(title: string, message?: string) {
    const currentBranchName = this.getCurrentBranchName();
    const commitMessage = `${currentBranchName}${divider}${title}`;
    const commitPayload = ["commit", "-m", commitMessage];
    if (message) {
      commitPayload.push("-m", message);
    }
    const { stdout } = await execa("git", commitPayload);
    return stdout;
  }

  private async getCurrentBranchName() {
    const { stdout, stderr } = await execa("git", [
      "rev-parse",
      "--abbrev-ref",
      "HEAD",
    ]);
    if (stderr) throw new Error(stderr);
    return stdout;
  }

  private errorMessage(message: any) {
    this.error(message, { exit: 2 });
  }
}
