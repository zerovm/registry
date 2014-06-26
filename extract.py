import sys
import tarfile
import yaml
import json

if __name__ == '__main__':
    path = '/dev/input'
    if len(sys.argv) > 1:
        path = sys.argv[1]

    tar = tarfile.open(path)
    fp = tar.extractfile('zapp.yaml')
    config = yaml.load(fp.read())
    sys.stdout.write(json.dumps(config))
