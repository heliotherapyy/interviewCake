/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var result_head;
    var result_tail;
    var done = 0;

    while (done < lists.length) {
        // O(N)
        var index = findSmallest(lists);
        if (!result_head) {
            insert(result_tail, lists[index].val);
            result_head = result_tail;
        } else {
            insert(result, lists[index].val);
        }

        move(lists[index]);
        if (!lists[index].val) done++;
    }

    return result_head;
};

function reachedEnd(lists) {

    for (var i = 0; i < lists.length; i++) {
        if (lists[i]) {
            return false;
        }
    }

    return true;
}

// O(N)
function findSmallest(lists) {
    var min = lists[0].val;
    var index = 0;

    for (var i = 0; i < lists.length; i++) {
        if (lists[i] && lists[i].val < min) {
            index = i;
            min = lists[i].val;
        }
    }

    return index;
}

// O(1);
function insert(tail, value) {
    tail.next = new ListNode(value);
    tail = tail.next;
}

// O(1)
function move(node) {
    node = node.next;
}
