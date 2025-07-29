import Reddis from '@upstash/ratelimit'
import { Ratelimit } from '@upstash/ratelimit'
import dotenv from 'dotenv';
dotenv.config();
const ratelimit = new Ratelimit({
    redis: Reddis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, '10 s'),// 10 requests every 10 seconds
})
export default ratelimit;