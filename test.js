var solveNQueens = function(n) {
    var res = [];
    var board = Array.from({ length: n }, () => Array(n).fill('.'));

    var backtrack = function(board, row) {
        if (row === board.length) {
            res.push(JSON.parse(JSON.stringify(board))); // deep copy
            return;
        }

        var n = board[row].length;
        for (var col = 0; col < n; col++) {
            if (!isValid(board, row, col)) {
                continue;
            }
            board[row][col] = 'Q';
            backtrack(board, row + 1);
            board[row][col] = '.';
        }
    };

    var isValid = function(board, row, col) {
        var n = board.length;
        // 检查列是否有皇后互相冲突
        for (var i = 0; i < n; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        // 检查右上方是否有皇后互相冲突
        for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        // 检查左上方是否有皇后互相冲突
        for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    };

    backtrack(board, 0);
    return res;
};