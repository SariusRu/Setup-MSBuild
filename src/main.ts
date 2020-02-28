import * as core from '@actions/core';

async function run() {
  try {
    const IS_WINDOWS = process.platform === 'win32';
    if(IS_WINDOWS === false){
      core.setFailed("MSTest.exe only works for Windows.");
      return;
    }

    await core.addPath("C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\MSTest.exe");

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();