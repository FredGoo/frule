package com.bstek.urule.runtime;

import com.bstek.urule.Utils;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Stack;

/**
 * @author fred
 * 2018-11-05 4:58 PM
 */
public class ElCompute {
    private Stack<Object> dataStack = new Stack();
    private Stack<Character> operateStack = new Stack();

    public ElCompute() {
    }

    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        String expr = "22/2-(5+(1*2))-2*2";

        for (int i = 0; i < 1; ++i) {
            ElCompute el = new ElCompute();
            Object data = el.doCompute(expr);
            System.out.println(data);
        }

        long end = System.currentTimeMillis();
        System.out.println(end - start);
    }

    public Object doCompute(String expr) {
        this.init(expr);
        return this.dataStack.pop();
    }

    private void init(String expr) {
        StringBuilder dataSb = new StringBuilder();
        char prevQuote = 32;
        char prevChar = ' ';

        for (int i = 0; i < expr.length(); ++i) {
            char c = expr.charAt(i);
            if (prevChar == '\\') {
                dataSb.append(c);
                prevChar = c;
            } else if (prevQuote == 34) {
                if (c == '"') {
                    prevQuote = 32;
                    this.dataStack.push(dataSb.toString());
                    dataSb.setLength(0);
                } else {
                    dataSb.append(c);
                }

                prevChar = c;
            } else {
                switch (c) {
                    case ' ':
                        if (prevQuote == 34) {
                            dataSb.append(c);
                        }
                        break;
                    case '!':
                    case '#':
                    case '$':
                    case '&':
                    case '\'':
                    case ',':
                    case '.':
                    default:
                        dataSb.append(c);
                        break;
                    case '"':
                        if (prevQuote == 34) {
                            prevQuote = 32;
                            this.dataStack.push(dataSb.toString());
                            dataSb.setLength(0);
                        } else {
                            prevQuote = 34;
                        }
                        break;
                    case '%':
                        this.doOp(dataSb, c, prevChar);
                        break;
                    case '(':
                        this.operateStack.push(c);
                        break;
                    case ')':
                        this.addDataStack(dataSb);
                        this.doCalculate(1);
                        break;
                    case '*':
                        this.doOp(dataSb, c, prevChar);
                        break;
                    case '+':
                        this.doOp(dataSb, c, prevChar);
                        break;
                    case '-':
                        this.doOp(dataSb, c, prevChar);
                        break;
                    case '/':
                        this.doOp(dataSb, c, prevChar);
                }

                prevChar = c;
            }
        }

        if (dataSb.length() > 0) {
            this.addDataStack(dataSb);
        }

        this.doCalculate(0);
    }

    private void doOp(StringBuilder dataSb, char op, char prevChar) {
        if (dataSb.length() == 0 && prevChar != ')' && prevChar != '"') {
            dataSb.append(op);
        } else {
            this.addDataStack(dataSb);
            if (op != '+' && op != '-') {
                this.doCalculate(2);
            } else {
                this.doCalculate(0);
            }

            this.operateStack.push(op);
        }

    }

    private void doCalculate(int current) {
        if (!this.operateStack.empty()) {
            char prevOp = (Character) this.operateStack.peek();
            if (prevOp == '(') {
                this.operateStack.pop();
            } else {
                Object left;
                Object result;
                if (current != 0 && current != 1) {
                    if (current == 2) {
                        while (prevOp == '*' || prevOp == '/' || prevOp == '%') {
                            Object right = this.dataStack.pop();
                            left = this.dataStack.pop();
                            char op = (Character) this.operateStack.pop();
                            result = this.calculate(left, op, right);
                            this.dataStack.push(result);
                            if (this.operateStack.isEmpty()) {
                                break;
                            }

                            prevOp = (Character) this.operateStack.peek();
                            if (prevOp == '(') {
                                break;
                            }
                        }
                    }
                } else {
                    char op = (Character) this.operateStack.pop();

                    do {
                        left = this.dataStack.pop();
                        result = this.calculate(left, op, left);
                        this.dataStack.push(result);
                        if (this.operateStack.isEmpty()) {
                            break;
                        }

                        op = (Character) this.operateStack.pop();
                    } while (op != '(');
                }

            }
        }
    }

    private Object calculate(Object left, char op, Object right) {
        BigDecimal b1;
        BigDecimal b2;
        if (op != '*' && op != '/' && op != '%' && op != '-') {
            if (op == '+') {
                if (!(right instanceof String) && !(left instanceof String)) {
                    b1 = (BigDecimal) left;
                    b2 = (BigDecimal) right;
                    return b1.add(b2);
                }

                return left.toString() + right.toString();
            }
        } else {
            if (right instanceof String || left instanceof String) {
                return left.toString() + op + right.toString();
            }

            b1 = (BigDecimal) left;
            b2 = (BigDecimal) right;
            if (op == '*') {
                return b1.multiply(b2);
            }

            if (op == '/') {
                return b1.divide(b2, 10, RoundingMode.HALF_UP).stripTrailingZeros();
            }

            if (op == '%') {
                return b1.divideAndRemainder(b2)[1];
            }

            if (op == '-') {
                return b1.subtract(b2);
            }
        }

        throw new RuntimeException("Unkown operate " + op + "");
    }

    private void addDataStack(StringBuilder dataSb) {
        if (dataSb.length() != 0) {
            String data = dataSb.toString();
            dataSb.setLength(0);

            try {
                BigDecimal bd = Utils.toBigDecimal(data);
                this.dataStack.push(bd);
            } catch (Exception var4) {
                this.dataStack.push(data);
            }

        }
    }

}
