import fs from 'fs'

const lineCount = (filename, onError, onSuccess) => {
  const callback = (err, data) => {
    if (err)
      return onError('problem reading file: ' + filename)
    return onSuccess(data.toString().split('\n').length)
  }

  fs.readFile(filename, callback)
}

export {lineCount}
