import { render, screen, fireEvent } from '@testing-library/react';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { mocked } from 'ts-jest/utils';
import { SubscribeButton } from '.';

jest.mock('next-auth/client');
jest.mock('next/dist/client/router');

describe('SubscribeButton component', () => {

    it('renders correctly', () => {
        const useSessionMocked = mocked(useSession)
        useSessionMocked.mockReturnValueOnce([null, false])

        render(<SubscribeButton />)

        expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
    });

    it('redirects user to sign in when not authenticated', () => {
        const signInMocked = mocked(signIn)

        const useSessionMocked = mocked(useSession)
        useSessionMocked.mockReturnValueOnce([null, false])

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe Now')

        fireEvent.click(subscribeButton)

        expect(signInMocked).toHaveBeenCalled()
    });

    it('redirects to posts when user already has a subscription', () => {
        const userRouterMocked = mocked(useRouter)
        const useSessionMocked = mocked(useSession)
        const pushMock = jest.fn();

        userRouterMocked.mockReturnValueOnce({
            push: pushMock,
        } as any)

        useSessionMocked.mockReturnValueOnce([
            {
                user: {
                    name: 'John Doe',
                    email: 'john.doe@exemple.com'
                },
                activeSubscription: 'fake-active-subscription',
                expires: 'fake-expires'
            },
            false
        ])

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe Now')

        fireEvent.click(subscribeButton)

        expect(pushMock).toHaveBeenCalled()
    });

})

