# AIPHAS agent
This is where the grpc service code will be written.

## Installation
Install pyenv
```bash
brew install pyenv
pyenv install 3.9.6
```
make sure pyenv configuration is in your `~/.zshrc`
```
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

Install poetry
```
curl -sSL https://install.python-poetry.org | python3 -
```

Make sure you're in the `aiphas` directory and do `poetry install`
