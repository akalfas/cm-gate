const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const ms = core.getInput('build_result');
	let parsed = JSON.parse(ms);
	let steps = parsed[0].steps;
	let results = steps.map((step) => {
		return {
			'name': step.name,
			'yey': step.succeeded
		};
	});
	results.forEach((result) => {
		core.setOutput(result.name, result.yey);
	});

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
