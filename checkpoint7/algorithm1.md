- **Length of the sentence**: The total number of characters in the sentence.
- **Number of words in the sentence**: The total number of words, accounting for spaces.
- **Number of vowels in the sentence**: The total count of vowels (a, e, i, o, u) in the sentence.

## How the Program Works

The program works by iterating through each character in the provided sentence and counting relevant information.

### Steps:
1. **Initialize variables**:
    - `sentence`: The input sentence to be analyzed.
    - `length_counter`: A counter for the length of the sentence.
    - `word_counter`: A counter for the number of words.
    - `vowel_counter`: A counter for the number of vowels.
    - `vowels`: A list of vowels (`['a', 'e', 'i', 'o', 'u']`).

2. **For each character in the sentence**:
    - Increment `length_counter` by 1 for each character.
    - If the character is a space, increment `word_counter` by 1.
    - If the character is a vowel (found in the `vowels` list), increment `vowel_counter` by 1.
    - If a period (`.`) is encountered, stop the loop (this marks the end of the sentence).

3. **Final word count adjustment**:
    - After processing all characters, if the sentence is not empty, increment `word_counter` by 1 to account for the last word (which won't be followed by a space).

4. **Output the results**:
    - Print the total **length** of the sentence.
    - Print the total **number of words** in the sentence.
    - Print the total **number of vowels** in the sentence.