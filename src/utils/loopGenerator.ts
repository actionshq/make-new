/**
 * Returns a generator, which loops over items infinitely
 * 
 * @param items The items to loop over
 * 
 * @example
 * ```ts
 * const numberGenerator = loopGenerator([1, 2, 3])
 * 
 * numberGenerator.next() // 1
 * numberGenerator.next() // 2
 * numberGenerator.next() // 3
 * numberGenerator.next() // 1
 * numberGenerator.next() // 2
 * ```
 */
export function* loopGenerator<T>(items: T[]): Generator<T, never, unknown> {
    let index = 0;
    while (true) {
        yield items[index];
        index = index < items.length - 1 ? index + 1 : 0;
    }
}
