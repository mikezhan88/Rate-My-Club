#! /bin/bash

cleanup() {
    pkill -P $$
}

for sig in INT QUIT HUP TERM; do
    trap "
        cleanup
        trap - $sig EXIT
        kill -s $sig "'"$$"' "$sig"
done
trap cleanup EXIT

cd backend;
pip install -r requirements.txt;
python -m uvicorn server:app & (cd ../rate-my-club; npm install; npm start;);
